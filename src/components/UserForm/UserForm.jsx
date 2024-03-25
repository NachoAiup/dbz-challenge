import TextField from "@mui/material/TextField";

export function UserForm() {
  return (
    <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
      <p
        style={{
          fontWeight: 600,
          fontSize: "16px",
          marginTop: "80px",
          marginBottom: "0px",
        }}
      >
        Usuario
      </p>
      <p style={{ fontWeight: 700, fontSize: "24px", marginTop: "5px" }}>
        Mis datos
      </p>
      <form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <TextField
            label="Usuario"
            variant="filled"
            defaultValue="Skylar"
            sx={{
              width: "344px",
              height: "56px",
              borderRadius: "10px",
              boxShadow: "0px 4px 37px 0px #4F7D963D",
              border: "none",
              background: "white",
            }}
            InputProps={{ disableUnderline: true }}
            InputLabelProps={{
              sx: {
                color: "#A6A8B5",
                fontSize: "14px",
                "&.Mui-focused": {
                  fontSize: "14px",
                  color: "#A6A8B5",
                },
              },
            }}
          />
          <TextField
            label="Mail"
            variant="filled"
            defaultValue="dantos@email.com"
            sx={{
              width: "344px",
              height: "56px",
              borderRadius: "10px",
              boxShadow: "0px 4px 37px 0px #4F7D963D",
              border: "none",
              background: "white",
              color: "#424242",
            }}
            InputProps={{ disableUnderline: true }}
            InputLabelProps={{
              sx: {
                color: "#A6A8B5",
                fontSize: "14px",
                "&.Mui-focused": {
                  fontSize: "14px",
                  color: "#A6A8B5",
                },
              },
            }}
          />
          <TextField
            label="Pais"
            variant="filled"
            defaultValue="Lorem ipsum"
            sx={{
              width: "344px",
              height: "56px",
              borderRadius: "10px",
              boxShadow: "0px 4px 37px 0px #4F7D963D",
              border: "none",
              background: "white",
            }}
            InputProps={{ disableUnderline: true }}
            InputLabelProps={{
              sx: {
                color: "#A6A8B5",
                fontSize: "14px",
                "&.Mui-focused": {
                  fontSize: "14px",
                  color: "#A6A8B5",
                },
              },
            }}
          />
          <TextField
            label="Ciudad"
            variant="filled"
            defaultValue="Lorem ipsum"
            sx={{
              width: "344px",
              height: "56px",
              borderRadius: "10px",
              boxShadow: "0px 4px 37px 0px #4F7D963D",
              border: "none",
              background: "white",
            }}
            InputProps={{ disableUnderline: true }}
            InputLabelProps={{
              sx: {
                color: "#A6A8B5",
                fontSize: "14px",
                "&.Mui-focused": {
                  fontSize: "14px",
                  color: "#A6A8B5",
                },
              },
            }}
          />
          <TextField
            label="Edad"
            variant="filled"
            defaultValue="Lorem ipsum"
            sx={{
              width: "344px",
              height: "56px",
              borderRadius: "10px",
              boxShadow: "0px 4px 37px 0px #4F7D963D",
              border: "none",
              background: "white",
            }}
            InputProps={{ disableUnderline: true }}
            InputLabelProps={{
              sx: {
                color: "#A6A8B5",
                fontSize: "14px",
                "&.Mui-focused": {
                  fontSize: "14px",
                  color: "#A6A8B5",
                },
              },
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "50px",
            alignItems: "center",
          }}
        >
          <button
            type="submit"
            style={{
              width: "295px",
              height: "56px",
              borderRadius: "39px",
              background: "#1C75BC",
              boxShadow: "0px 4px 13px 0px #B6C5FF",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "20px",
              color: "#FFFFFF",
              border: "1px solid #FFFFFF",
              cursor: "pointer",
            }}
          >
            Guardar
          </button>
          <button
            style={{
              width: "295px",
              height: "56px",
              borderRadius: "39px",
              background: "#35C2FD",
              boxShadow: "0px 4px 13px 0px #B6C5FF",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "20px",
              color: "#FFFFFF",
              border: "1px solid #FFFFFF",
              cursor: "pointer",
              marginBottom: "50px",
            }}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
