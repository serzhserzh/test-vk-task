import styles from "../styles/ui/Counter.module.scss";

const Count: React.FC<{
  stated: string;
  sizeCount: {
    minSize?: string;
    horizontalPadding?: string;
    size?: string;
    fontSize: string;
  };
  styledCount: {
    color: string;
    backgroundColor: string;
  };
  pulse: boolean;
  textCount: number;
}> = ({ stated, sizeCount, styledCount, pulse, textCount }) => {
  const count = textCount;
  if (count > 0) {
    return count < 99 ? (
      <div
        style={{
          ...styledCount,
          ...(sizeCount.size === undefined
            ? {
                fontSize: sizeCount.fontSize,
                minHeight: sizeCount.minSize,
                minWidth: sizeCount.minSize,
                paddingLeft: sizeCount.horizontalPadding,
                paddingRight: sizeCount.horizontalPadding,
              }
            : {
                fontSize: sizeCount.fontSize,
                width: sizeCount.size,
                height: sizeCount.size,
              }),
        }}
        className={
          stated === "loading"
            ? `${styles.loading} ${styles.liveIndicator}`
            : `${styles.liveIndicator}`
        }
      >
        {count}
        {sizeCount.size !== undefined && pulse && (
          <>
            <div
              className={`${styles.pulse} ${styles.one}`}
              style={{
                ...styledCount,
                width: sizeCount.size,
                height: sizeCount.size,
              }}
            ></div>
            <div
              className={`${styles.pulse} ${styles.two}`}
              style={{
                ...styledCount,
                width: sizeCount.size,
                height: sizeCount.size,
              }}
            ></div>
          </>
        )}
      </div>
    ) : (
      <div
        style={{
          ...styledCount,
          ...(sizeCount.size === undefined
            ? {
                fontSize: sizeCount.fontSize,
                minHeight: sizeCount.minSize,
                minWidth: sizeCount.minSize,
                paddingLeft: sizeCount.horizontalPadding,
                paddingRight: sizeCount.horizontalPadding,
              }
            : {
                fontSize: sizeCount.fontSize,
                width: sizeCount.size,
                height: sizeCount.size,
              }),
        }}
        className={
          stated === "loading"
            ? `${styles.loading} ${styles.liveIndicator}`
            : `${styles.liveIndicator}`
        }
      >
        99+
        {sizeCount.size !== undefined && pulse && (
          <>
            <div
              className={`${styles.pulse} ${styles.one}`}
              style={{
                ...styledCount,
                width: sizeCount.size,
                height: sizeCount.size,
              }}
            ></div>
            <div
              className={`${styles.pulse} ${styles.two}`}
              style={{
                ...styledCount,
                width: sizeCount.size,
                height: sizeCount.size,
              }}
            ></div>
          </>
        )}
      </div>
    );
  }
};

export default Count;
