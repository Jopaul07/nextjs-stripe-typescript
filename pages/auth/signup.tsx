import * as React from 'react';
import { useForm, Controller, SubmitHandler } from "react-hook-form"

import Paper from '@mui/material/Paper';
import LoadingButton from '@mui/lab/LoadingButton';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Container } from '@mui/material';

interface IFormInputs {
    name: string
    email: string
    password: string
    birthdate: string
    data_consent: boolean
    physician_consent: boolean
}
type SignUpProps = {
    onSubmitExt: (
        data: IFormInputs,
        setError: (name: string, error: { type: string, message: string }) => void,
        clearErrors: () => void,
    ) => Promise<void>;
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
    generalError: string;
};

function DataConsent(props: any) {
    return (
        <Typography variant="caption" color="text.primary" align="left" {...props}>
            {'I agree to StarStarter Rx '}
            <Link color="text.primary" href="https://arcadetherapeutics.com/legal/" target="_blank" rel="noopener noreferrer">
                terms of use
            </Link > {' and '}
            <Link color="text.primary" href="https://arcadetherapeutics.com/legal/" target="_blank" rel="noopener noreferrer">
                privacy policy
            </Link>
            {', which may include that StarStarter Rx may share my data with my healthcare provider or de-identified data with my employer.'}
        </Typography>
    );
}

function PrivacyConsent(props: any) {
    return (
        <Typography variant="caption" color="text.primary" align="left" {...props}>
            {'I acknowledge the recommendation to consult with a healthcare provider before starting.'}
        </Typography>
    );
}

export default function SignUp({ onSubmitExt, isLoading, setIsLoading, generalError }: SignUpProps) {

    const [showPassword, setShowPassword] = React.useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = React.useState(false);
    const [lengthCheck, setLengthCheck] = React.useState(false);
    const [lowercaseCheck, setLowercaseCheck] = React.useState(false);
    const [uppercaseCheck, setUppercaseCheck] = React.useState(false);
    const [numberCheck, setNumberCheck] = React.useState(false);
    const [specialCharCheck, setSpecialCharCheck] = React.useState(false);

    const { handleSubmit, control, trigger, reset, formState: { errors }, setError, clearErrors } = useForm<IFormInputs>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            birthdate: "",
            data_consent: false,
            physician_consent: false
        },
    })

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        onSubmitExt(data, setError, clearErrors)
    }

    function validateBirthDate(value: string) {
        const today = new Date();
        const birthDate = new Date(value);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age >= 22 || 'You must be at least 22 years old';
    }

    function validatePassword(value: string) {
        const lengthCheck = value.length >= 8;
        const lowercaseCheck = /[a-z]/.test(value);
        const uppercaseCheck = /[A-Z]/.test(value);
        const numberCheck = /\d/.test(value);
        const specialCharCheck = /[=+\-^$*.{}[\]()?"!@#%&\/,<>':;|_~`]/.test(value);

        setLengthCheck(lengthCheck);
        setLowercaseCheck(lowercaseCheck);
        setUppercaseCheck(uppercaseCheck);
        setNumberCheck(numberCheck);
        setSpecialCharCheck(specialCharCheck);

        // Count how many of the non-length checks are successful
        const successfulChecks = [lowercaseCheck, uppercaseCheck, numberCheck, specialCharCheck].filter(Boolean).length;

        if (!lengthCheck || successfulChecks < 4) {
            return "Password must be at least 8 characters long and meet at least 3 of the other specified criteria";
        }
        return true;
    }

    return (
        <Container component="main" sx={{ flex: 1, display: "flex" }} maxWidth="sm">
            <CssBaseline />
            <Box
                sx={{
                    px: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                component={Paper}
                elevation={0}
            >
                <img
                    alt="Starstarter"
                    src="https://pzenterprise-templates.s3.amazonaws.com/uploads/org/StarStarter-Rx-logo_400x142web.png"
                    style={{ width: 212, height: 75 }}
                />

                <Typography variant="h3" gutterBottom color="primary" my={2}>
                    Create Your Account
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Controller
                                name="name"
                                control={control}
                                rules={{ required: "Name is required" }}
                                render={({ field }) =>
                                    <TextField
                                        autoComplete="given-name"
                                        fullWidth
                                        autoFocus
                                        id="name"
                                        label="Name"
                                        error={errors.name ? true : false}
                                        {...field}
                                    />}
                            />
                            {errors.name && <FormHelperText error>{errors.name.message}</FormHelperText>}
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "Invalid email address",
                                    }
                                }}
                                render={({ field }) =>
                                    <TextField
                                        autoComplete="email"
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        error={errors.email ? true : false}
                                        {...field}
                                    />}
                            />
                            {errors.email && <FormHelperText error>{errors.email.message}</FormHelperText>}
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="birthdate"
                                control={control}
                                rules={{
                                    required: 'Date of birth is required',
                                    validate: (value) => validateBirthDate(value),
                                }}
                                render={({ field }) =>
                                    <TextField
                                        fullWidth
                                        id="birthdate"
                                        label="Date of Birth*"
                                        type="date"
                                        InputLabelProps={{ shrink: true }}
                                        error={errors.birthdate ? true : false}
                                        {...field}
                                    />}
                            />
                            {errors.birthdate && <FormHelperText error>{errors.birthdate.message}</FormHelperText>}
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="password"
                                control={control}
                                rules={{
                                    validate: (value) => validatePassword(value)
                                }}
                                render={({ field }) =>
                                    <TextField
                                        {...field}
                                        autoComplete="new-password"
                                        fullWidth
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        label="Password"
                                        error={errors.password ? true : false}
                                        onChange={(e) => {
                                            field.onChange(e); // call the original onChange
                                            trigger("password"); // manually trigger validation
                                        }}
                                        onFocus={() => setIsPasswordFocused(true)}
                                        onBlur={() => setIsPasswordFocused(false)}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="password-visibility"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        size='small'
                                                    >
                                                        {showPassword ? (
                                                            <VisibilityOffIcon />
                                                        ) : (
                                                            <VisibilityIcon />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />}
                            />

                            {(errors.password || isPasswordFocused) && (
                                <Grid item xs={12} maxWidth="sm">
                                    <Typography variant="body2" component="div" sx={{ mt: 1 }}>
                                        Password must:
                                    </Typography>
                                    <List dense={true}>
                                        <ListItem>
                                            <ListItemIcon color='success'>
                                                {lengthCheck ? <CheckRoundedIcon color='success' /> : <CloseRoundedIcon />}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Be a minimum of 8 characters"
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText
                                                primary="Must include all of the below:"
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                {lowercaseCheck ? <CheckRoundedIcon color='success' /> : <CloseRoundedIcon />}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="One lower case letter"
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                {uppercaseCheck ? <CheckRoundedIcon color='success' /> : <CloseRoundedIcon />}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="One upper case letter"
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                {numberCheck ? <CheckRoundedIcon color='success' /> : <CloseRoundedIcon />}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="One number"
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                {specialCharCheck ? <CheckRoundedIcon color='success' /> : <CloseRoundedIcon />}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={`One special character such as =+-^$*.{}[]()?"!@#%&/,<>':;|_~\``}
                                            />
                                        </ListItem>
                                    </List>
                                </Grid>
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="data_consent"
                                control={control}
                                rules={{ required: '*Required checkbox' }}
                                render={({ field }) =>
                                    <FormControlLabel
                                        label={<DataConsent />}
                                        control={
                                            <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} {...field} />
                                        }
                                        sx={{ alignItems: 'flex-start', display: 'flex' }}
                                    />
                                }
                            />
                            {errors.data_consent && <FormHelperText error>{errors.data_consent.message}</FormHelperText>}
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="physician_consent"
                                control={control}
                                rules={{ required: '*Required checkbox' }}
                                render={({ field }) =>
                                    <FormControlLabel
                                        label={<PrivacyConsent />}
                                        control={
                                            <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} {...field} />
                                        }
                                        sx={{ alignItems: 'flex-start', display: 'flex' }}
                                    />
                                }
                            />
                            {errors.physician_consent && <FormHelperText error>{errors.physician_consent.message}</FormHelperText>}
                        </Grid>
                    </Grid>
                    {generalError && <FormHelperText error>{generalError}</FormHelperText>}
                    <LoadingButton
                        type="submit"
                        fullWidth
                        loading={isLoading}
                        loadingIndicator="Loading…"
                        variant="contained"
                        color='secondary'
                        sx={{
                            mt: 3,
                            mb: 2,
                            borderRadius: 8,
                            color: (theme) => theme.palette.primary.main,
                            fontSize: 16,
                            fontWeight: 500
                        }}
                    >
                        CONTINUE TO PAYMENT
                    </LoadingButton>
                </form>
            </Box>
        </Container>
    );
}