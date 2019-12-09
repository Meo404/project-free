const userActionMenuReducer = (state, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                showSignIn: true,
                showSignUp: false,
                showSignUpSuccess: false,
                showChangePassword: false,
                showChangePasswordSuccess: false,
                showResetPassword: false,
                showResetPasswordSuccess: false,
                showRequestPassword: false,
                showRequestPasswordSuccess: false,
                showDeleteAccount: false,
                showDeleteAccountSuccess: false
            };
        case 'SIGN_UP':
            return {
                showSignIn: false,
                showSignUp: true,
                showSignUpSuccess: false,
                showChangePassword: false,
                showChangePasswordSuccess: false,
                showResetPassword: false,
                showResetPasswordSuccess: false,
                showRequestPassword: false,
                showRequestPasswordSuccess: false,
                showDeleteAccount: false,
                showDeleteAccountSuccess: false
            };
        case 'SIGN_UP_SUCCESS':
            return {
                showSignIn: false,
                showSignUp: false,
                showSignUpSuccess: true,
                showChangePassword: false,
                showChangePasswordSuccess: false,
                showResetPassword: false,
                showResetPasswordSuccess: false,
                showRequestPassword: false,
                showRequestPasswordSuccess: false,
                showDeleteAccount: false,
                showDeleteAccountSuccess: false
            };
        case 'CHANGE_PASSWORD':
            return {
                showSignIn: false,
                showSignUp: false,
                showSignUpSuccess: false,
                showChangePassword: true,
                showChangePasswordSuccess: false,
                showResetPassword: false,
                showResetPasswordSuccess: false,
                showRequestPassword: false,
                showRequestPasswordSuccess: false,
                showDeleteAccount: false,
                showDeleteAccountSuccess: false
            };
        case 'CHANGE_PASSWORD_SUCCESS':
            return {
                showSignIn: false,
                showSignUp: false,
                showSignUpSuccess: false,
                showChangePassword: false,
                showChangePasswordSuccess: true,
                showResetPassword: false,
                showResetPasswordSuccess: false,
                showRequestPassword: false,
                showRequestPasswordSuccess: false,
                showDeleteAccount: false,
                showDeleteAccountSuccess: false
            };
        case 'RESET_PASSWORD':
            return {
                showSignIn: false,
                showSignUp: false,
                showSignUpSuccess: false,
                showChangePassword: false,
                showChangePasswordSuccess: false,
                showResetPassword: true,
                showResetPasswordSuccess: false,
                showRequestPassword: false,
                showRequestPasswordSuccess: false,
                showDeleteAccount: false,
                showDeleteAccountSuccess: false
            };
        case 'RESET_PASSWORD_SUCCESS':
            return {
                showSignIn: false,
                showSignUp: false,
                showSignUpSuccess: false,
                showChangePassword: false,
                showChangePasswordSuccess: false,
                showResetPassword: false,
                showResetPasswordSuccess: true,
                showRequestPassword: false,
                showRequestPasswordSuccess: false,
                showDeleteAccount: false,
                showDeleteAccountSuccess: false
            };
        case 'REQUEST_PASSWORD':
            return {
                showSignIn: false,
                showSignUp: false,
                showSignUpSuccess: false,
                showChangePassword: false,
                showChangePasswordSuccess: false,
                showResetPassword: false,
                showResetPasswordSuccess: false,
                showRequestPassword: true,
                showRequestPasswordSuccess: false,
                showDeleteAccount: false,
                showDeleteAccountSuccess: false
            };
        case 'REQUEST_PASSWORD_SUCCESS':
            return {
                showSignIn: false,
                showSignUp: false,
                showSignUpSuccess: false,
                showChangePassword: false,
                showChangePasswordSuccess: false,
                showResetPassword: false,
                showResetPasswordSuccess: false,
                showRequestPassword: false,
                showRequestPasswordSuccess: true,
                showDeleteAccount: false,
                showDeleteAccountSuccess: false
            };
        case 'DELETE_ACCOUNT':
            return {
                showSignIn: false,
                showSignUp: false,
                showSignUpSuccess: false,
                showChangePassword: false,
                showChangePasswordSuccess: false,
                showResetPassword: false,
                showResetPasswordSuccess: false,
                showRequestPassword: false,
                showRequestPasswordSuccess: false,
                showDeleteAccount: true,
                showDeleteAccountSuccess: false
            };
        case 'DELETE_ACCOUNT_SUCCESS':
            return {
                showSignIn: false,
                showSignUp: false,
                showSignUpSuccess: false,
                showChangePassword: false,
                showChangePasswordSuccess: false,
                showResetPassword: false,
                showResetPasswordSuccess: false,
                showRequestPassword: false,
                showRequestPasswordSuccess: false,
                showDeleteAccount: false,
                showDeleteAccountSuccess: true
            };
        case 'CLOSE':
            return {
                showSignIn: false,
                showSignUp: false,
                showSignUpSuccess: false,
                showChangePassword: false,
                showChangePasswordSuccess: false,
                showResetPassword: false,
                showResetPasswordSuccess: false,
                showRequestPassword: false,
                showRequestPasswordSuccess: false,
                showDeleteAccount: false,
                showDeleteAccountSuccess: false
            };
        default:
            return state;
    }
};

export default userActionMenuReducer;