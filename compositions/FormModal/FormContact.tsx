import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";

import { FormControl, FormControlForPhoneNumber } from "@/compositions";
import axios from "axios.config";
import { wrapperContactFormSchema } from "@/yups/Contact/Contact";
import { defaultContactFormState } from "@/yups/Contact/defaultContactFormState";
import CheckIconV2 from "@/components/Icons/CheckIconV2";
import { useNotification } from "@/hooks/useNotification";
import { useIntl, useMedia } from "@/hooks";

const FormContact = () => {
  const theme = useTheme();
  const { messages } = useIntl();
  const { isSmDown } = useMedia();

  const { control, handleSubmit, reset } = useForm({
    resolver: wrapperContactFormSchema,
    defaultValues: defaultContactFormState(),
  });

  const { loading, setLoading, enqueueSnackbarWithError } = useNotification();

  const onSubmit = useCallback(
    async (data: any) => {
      try {
        setLoading(true);

        await axios(`api/v2/contacts/`, {
          method: "post",
          data,
        });

        document.querySelector(".success")?.setAttribute("style", "right: 0");
        reset(defaultContactFormState, {
          keepDirty: false,
        });
      } catch (error) {
        enqueueSnackbarWithError(error);
      } finally {
        setLoading(false);
      }
    },
    [enqueueSnackbarWithError]
  );

  useEffect(() => {
    if (!loading) {
      new Promise((resolve: (value?: unknown) => void) => {
        setTimeout(() => {
          document.querySelector(".success")?.setAttribute("style", "right: 100%");
          resolve();
        }, 3000);
      });
    }
  }, [loading]);

  return (
    <Box component={"form"} textAlign={"center"}>
      <StyledFormControlWrapper>
        <FormControl
          control={control}
          name={"parent_name"}
          placeholder={messages["contact.placeholder.name"]}
        />
      </StyledFormControlWrapper>

      <StyledFormControlWrapper>
        <FormControl
          control={control}
          name="email"
          placeholder={messages["contact.placeholder.email"]}
        />
      </StyledFormControlWrapper>

      <StyledFormControlWrapper>
        <FormControlForPhoneNumber
          control={control}
          name="phone_number"
          placeholder={messages["contact.placeholder.phone"]}
        />
      </StyledFormControlWrapper>

      <StyledFormControlWrapper>
        <FormControl
          control={control}
          name="name"
          placeholder={messages["contact.placeholder.childName"]}
        />
      </StyledFormControlWrapper>

      <StyledFormControlWrapper>
        <FormControl
          control={control}
          name="content"
          placeholder={messages["contact.placeholder.content"]}
          InputProps={{
            multiline: true,
            rows: 4,
          }}
          FormControlProps={{
            sx: {
              ["& > .MuiInputBase-root"]: {
                borderRadius: "20px",

                [theme.breakpoints.down("md")]: {
                  borderRadius: "10px !important",
                },
              },
            },
          }}
        />
      </StyledFormControlWrapper>

      <StyledButton
        variant="contained"
        fullWidth
        autoFocus
        onClick={handleSubmit(onSubmit)}
        disabled={loading}
        className="button-wrapper"
      >
        <StyledButtonSuccess className="success">
          <CheckIconV2 />
          <Typography
            sx={{
              color: "#fff",
            }}
          >
            {messages["contact.submitted"]}
          </Typography>
        </StyledButtonSuccess>

        {loading ? (
          <CircularProgress size={isSmDown ? 15 : 20} />
        ) : (
          <>
            <Typography variant="menuText" color={"#F15137"}>
              {messages["contact.submit"]}
            </Typography>
          </>
        )}
      </StyledButton>
    </Box>
  );
};

const StyledFormControlWrapper = styled(Box)(({ theme }) => {
  return {
    margin: "0 auto 0",
    maxWidth: 600,
    position: "relative",

    [theme.breakpoints.down("lg")]: {
      margin: "0 auto 0",
    },

    [theme.breakpoints.down("sm")]: {
      margin: "0 auto 0",
    },

    "& .messageError": {
      height: "1.8rem",
      "& p": {
        marginLeft: 0,
        paddingLeft: 30,
      },
      [theme.breakpoints.down("sm")]: {
        height: "1.5rem",
      },
    },

    ["& > .MuiFormControl-root .MuiInputBase-root"]: {
      backgroundColor: theme.palette.background.default,

      [theme.breakpoints.down("md")]: {
        borderRadius: "20px",
      },

      ["& > input"]: {
        [theme.breakpoints.down("lg")]: {
          padding: "10px 30px",
        },
        [theme.breakpoints.down("md")]: {
          padding: "10px 30px",
        },
        [theme.breakpoints.down("sm")]: {
          padding: "7px 30px",
        },
      },
    },

    "& input::-webkit-input-placeholder,& textarea::-webkit-input-placeholder": {
      ...theme.typography.body2,
      opacity: 1,
      textDecoration: "none",

      [theme.breakpoints.down("lg")]: {
        ...theme.typography.m_body1,
      },
      [theme.breakpoints.down("sm")]: {
        ...theme.typography.m_body2,
      },
    },
  };
});

const StyledButton = styled(Button)(({ theme }) => {
  return {
    padding: "12px",
    background: "rgba(255, 255, 255, 0.7)",
    border: "none",
    backdropFilter: "blur(5px)",

    maxWidth: "600px",

    position: "relative",
    overflow: "hidden",

    "&:hover": {
      border: "none",
      background: "rgba(255, 255, 255, 0.7)",

      opacity: "0.8",
    },

    ["& > span"]: {
      color: "#F15137",

      [theme.breakpoints.down("lg")]: {
        ...theme.typography.body1,
      },

      [theme.breakpoints.down("sm")]: {
        ...theme.typography.title3,
      },
    },

    [theme.breakpoints.down("md")]: {
      padding: "7px 12px",
    },
  };
});

const StyledButtonSuccess = styled(Stack)(({ theme }) => {
  return {
    position: "absolute",
    right: "100%",

    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    transition: "all linear 0.2s",

    background:
      "linear-gradient(180deg, #FFA25E 0%, #FF6E4B 40.94%, #FF4B4B 74.27%, #EE4545 100%)",
    backdropFilter: "blur(10px)",
    borderRadius: "30px",

    "& > svg": {
      width: 32,
      height: 32,

      [theme.breakpoints.down("sm")]: {
        width: 20,
        height: 20,
      },
    },
  };
});

export default FormContact;
