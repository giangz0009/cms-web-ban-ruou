import React from "react";
import { useForm, Controller } from "react-hook-form";
import Grid from "@mui/material/Unstable_Grid2";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button, Container, Typography } from "@mui/material";

import { makeStyles } from "tss-react/mui";
import ValidateInput from "src/components/atoms/ValidateInput";
import { schemaLoginType } from "src/pages/Login";

const useStyles = makeStyles()((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    color: "#565656",
    fontSize: "4rem",
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontSize: "1.6rem",
    transition: ".4s",
    backgroundColor: theme.palette.primary.light,
    ":hover": {
      transform: "scale(1.1)",
    },
  },
}));

interface LoginContainerProps {
  schema: yup.ObjectSchema<schemaLoginType>;
  onSubmit: (data: any) => void;
}

const inputClass: string =
  "p-2 rounded-lg text-2xl outline-0 border-2 border-slate-300 bg-transparent my-2";
const labelClass: string = "text-2xl font-semibold";

const LoginContainer: React.FC<LoginContainerProps> = ({
  onSubmit,
  schema,
}) => {
  const { classes } = useStyles();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden flex items-center justify-center bg-[#3AAF83]">
      <div className="border-2 border-slate-400 rounded-3xl shadow-xl bg-white p-6 py-10">
        <Container maxWidth="sm">
          <div className={classes.paper}>
            <LockOutlinedIcon className={classes.avatar} />
            <Typography
              component="h1"
              variant="h5"
              sx={{
                fontSize: "3rem",
                fontWeight: 600,
                color: "#565656",
              }}
            >
              Login
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid xs={12}>
                  <Controller
                    name="username"
                    control={control}
                    render={({
                      field: { value, onChange, name },
                      fieldState,
                    }) => (
                      <ValidateInput
                        inputClassName={inputClass}
                        labelClass={labelClass}
                        name={name}
                        value={value}
                        label="Tài Khoản:"
                        placeHolder="Nhập Tài khoản"
                        type="text"
                        onChange={onChange}
                        errors={fieldState.error?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid xs={12}>
                  <Controller
                    name="password"
                    control={control}
                    render={({
                      field: { value, onChange, name },
                      fieldState,
                    }) => (
                      <ValidateInput
                        inputClassName={inputClass}
                        labelClass={labelClass}
                        name={name}
                        value={value}
                        label="Mật Khẩu:"
                        placeHolder="Nhập Mật Khẩu"
                        type="password"
                        onChange={onChange}
                        errors={fieldState.error?.message}
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Login
              </Button>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default LoginContainer;
