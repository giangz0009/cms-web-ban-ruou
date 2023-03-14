import React from "react";
import { useForm, Controller } from "react-hook-form";
import Grid from "@mui/material/Unstable_Grid2";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button, Container, TextField, Typography } from "@mui/material";

import { makeStyles } from "tss-react/mui";
import ValidateInput from "../../components/atoms/ValidateInput";

const schema = yup.object().shape({
  username: yup.string().required("Tài khoản không được bỏ trống!"),
  password: yup.string().required("Mật khẩu không được bỏ trống!"),
});

interface LoginProps {
  // onSubmit: (data: any) => void;
}

const useStyles = makeStyles()((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const inputClass: string =
  "p-2 rounded-lg text-2xl outline-0 border-2 border-slate-300 bg-transparent";
const labelClass: string = "text-2xl";

export default function Login({}: LoginProps) {
  const { classes } = useStyles();
  const { control, handleSubmit, register } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <LockOutlinedIcon className={classes.avatar} />
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Controller
                name="username"
                control={control}
                render={({ field: { value, onChange, name }, fieldState }) => (
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
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    {...register("password")}
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
  );
}
