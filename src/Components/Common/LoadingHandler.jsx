import { memo, useMemo } from "react";

const LoadingHandler = memo(
  ({
    state,
    type = "spinner",
    size = "md",
    variant = "default",
    message,
    error,
    onRetry,
    fullScreen = false,
    centered = true,
    className = "",
    children,
  }) => {
    // ===================== Memoized Messages =====================
    const messages = useMemo(
      () => ({
        default: {
          loading: "Loading...",
          error: "Something went wrong",
          "not-found": "Content not found",
        },
        blog: {
          loading: "Loading blog post...",
          error: "Failed to load blog post",
          "not-found": "Blog post not found",
        },
        card: {
          loading: "Loading...",
          error: "Failed to load content",
          "not-found": "Content not available",
        },
        error: {
          loading: "Loading...",
          error: "An error occurred",
          "not-found": "Content not found",
        },
        "not-found": {
          loading: "Loading...",
          error: "Something went wrong",
          "not-found": "Content not found",
        },
      }),
      []
    );

    // ===================== Current Message =====================
    const currentMessage = useMemo(() => {
      if (message) return message;
      const variantMessages = messages[variant] || messages.default;
      return variantMessages[state] || variantMessages.loading;
    }, [message, variant, state, messages]);

    // ===================== Variant Styles =====================
    const variantStyles = useMemo(() => {
      const variants = {
        default: {
          text: "text-white",
          button: "bg-blue-600 hover:bg-blue-700",
          skeleton: "bg-gray-600",
        },
        blog: {
          text: "text-purple-400",
          button: "bg-purple-600 hover:bg-purple-700",
          skeleton: "bg-purple-500",
        },
        card: {
          text: "text-gray-400",
          button: "bg-gray-600 hover:bg-gray-700",
          skeleton: "bg-gray-400",
        },
        error: {
          text: "text-red-400",
          button: "bg-red-600 hover:bg-red-700",
          skeleton: "bg-red-500",
        },
        "not-found": {
          text: "text-gray-400",
          button: "bg-gray-600 hover:bg-gray-700",
          skeleton: "bg-gray-500",
        },
      };
      return variants[variant] || variants.default;
    }, [variant]);

    // ===================== Spinner Component =====================
    const Spinner = useMemo(
      () =>
        ({ size }) => {
          const getSizeClasses = () =>
            ({
              sm: "w-6 h-6",
              md: "w-12 h-12",
              lg: "w-16 h-16",
              xl: "w-20 h-20",
            }[size] || "w-12 h-12");

          return (
            <span
              className={`relative inline-block rounded-full animate-spin ${getSizeClasses()}`}
            />
          );
        },
      [] //  No dependencies — fully stable
    );

    // ===================== Skeleton Loader Component =====================
    const SkeletonLoader = useMemo(
      () =>
        ({ size }) => {
          const sizes = {
            sm: "w-16 h-16 rounded",
            md: "w-24 h-24 rounded-lg",
            lg: "w-32 h-32 rounded-lg",
            xl: "w-40 h-40 rounded-xl",
          };
          return <div className={`animate-pulse ${sizes[size] || sizes.md}`} />;
        },
      [] //  No dependencies — fully stable
    );

    // ===================== Render Loader =====================
    const renderLoader = useMemo(() => {
      if (state === "error" || state === "not-found") {
        return (
          <div
            className={`text-center ${
              centered ? "flex flex-col items-center justify-center" : ""
            }`}
          >
            <div className={`text-lg mb-4 ${variantStyles.text}`}>
              {state === "error" &&
                error &&
                `Error: ${typeof error === "string" ? error : error.message}`}
              {state === "not-found" && currentMessage}
            </div>
            {state === "error" && onRetry && (
              <button
                onClick={onRetry}
                className={`px-6 py-2 rounded font-medium transition-colors ${variantStyles.button} text-white`}
              >
                Retry
              </button>
            )}
          </div>
        );
      }

      switch (type) {
        case "spinner":
          return (
            <div
              className={`flex flex-col items-center justify-center ${
                centered ? "h-full" : ""
              }`}
            >
              <Spinner size={size} />
              <div className={`mt-4 text-lg ${variantStyles.text}`}>
                {currentMessage}
              </div>
            </div>
          );

        case "text":
          return (
            <div className={`text-center ${variantStyles.text}`}>
              {currentMessage}
            </div>
          );

        case "skeleton":
          return (
            <div
              className={`space-y-3 ${
                centered ? "flex flex-col items-center" : ""
              }`}
            >
              <SkeletonLoader size={size} />
              <div className={`text-center ${variantStyles.text}`}>
                {currentMessage}
              </div>
            </div>
          );

        default:
          return (
            <div
              className={`flex items-center justify-center ${variantStyles.text}`}
            >
              {currentMessage}
            </div>
          );
      }
    }, [
      state,
      type,
      size,
      variant,
      centered,
      error,
      onRetry,
      variantStyles,
      currentMessage,
    ]); //  removed unnecessary deps (Spinner, SkeletonLoader)

    // ===================== Container =====================
    const containerClasses = useMemo(() => {
      const baseClasses = `text-white font-sans ${className}`;
      if (fullScreen)
        return `min-h-screen bg-backgroundPrimary pt-16 ${baseClasses}`;
      if (centered) return `flex items-center justify-center ${baseClasses}`;
      return baseClasses;
    }, [fullScreen, centered, className]);

    const contentSize = useMemo(
      () =>
        ({ sm: "h-16", md: "h-32", lg: "h-48", xl: "h-64" }[size] || "h-32"),
      [size]
    );

    // ===================== Conditional Return =====================
    if (state === "success" && !children) return null;
    if (state === "success") return <>{children}</>;

    return (
      <div className={containerClasses}>
        {fullScreen ? (
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
            <div className={contentSize}>{renderLoader}</div>
          </div>
        ) : (
          <div className={contentSize}>{renderLoader}</div>
        )}
      </div>
    );
  }
);

LoadingHandler.displayName = "LoadingHandler";
export default LoadingHandler;
