export function Header() {
  return (
    <header
      style={{
        height: "177px",
        width: "100vw",
        background:
          "linear-gradient(101.52deg, #1C75BC -2.33%, #35C2FD 97.12%)",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          paddingTop: "35px",
          margin: "0 auto",
        }}
      >
        <button
          style={{
            background: "transparent",
            width: "38px",
            height: "38px",
            border: "1px solid white",
            borderRadius: "100%",
            position: "relative",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "7px",
              height: "15px",
              border: "1.5px solid #FFFFFF",
              position: "absolute",
              top: "10px",
              right: "18px",
            }}
          ></div>
          <div
            style={{
              width: "6px",
              height: "6px",
              border: "1.5px solid #FFFFFF",
              position: "absolute",
              top: "10px",
              left: "20px",
            }}
          ></div>
          <div
            style={{
              width: "6px",
              height: "6px",
              border: "1.5px solid #FFFFFF",
              position: "absolute",
              top: "19px",
              left: "20px",
            }}
          ></div>
        </button>
        <div
          style={{
            width: "108px",
            height: "38px",
            background: "#FFFFFF",
            borderRadius: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <img src="./coins.png" />
          <p
            style={{ fontWeight: "600", fontSize: "12px", lineHeight: "20px" }}
          >
            500 Coins
          </p>
        </div>
        <div
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "19px",
            boxShadow: "0px 4px 37px 0px #4F7D963D",
            background:
              "linear-gradient(159.73deg, rgba(255, 255, 255, 0.45) 13.48%, rgba(255, 255, 255, 0) 96.38%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="./profile-picture.png" />
        </div>
      </div>
      <div
        style={{
          width: "110px",
          height: "110px",
          position: "absolute",
          borderRadius: "65px",
          background:
            "linear-gradient(159.73deg, rgba(255, 255, 255, 0.45) 13.48%, rgba(255, 255, 255, 0) 96.38%)",
          backgroundImage: "url(./background.png)",
          backgroundPosition: "center",
          left: "50%",
          marginLeft: "-55px",
          bottom: "-55px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 4px 37px 0px #4F7D963D",
        }}
      >
        <img src="./prof-pic.png" style={{ width: "100px", height: "100px" }} />
      </div>
    </header>
  );
}
