export const registerFormControls = [
    {
        name: 'firstname',
        label: 'first name',
        placeholder: 'Enter your first name',
        elementType: 'input',
        type: 'text',
    },
    {
        name: 'lastname',
        label: 'last name',
        placeholder: 'Enter your last name',
        elementType: 'input',
        type: 'text',
    },
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        elementType: 'input',
        type: 'text',
    },
    {
        name: 'mobile',
        label: 'mobile',
        placeholder: 'Enter your mobile number',
        elementType: 'input',
        type: 'number',
    },
        {
        name: 'nationality',
        label: 'Nationality',
        placeholder: 'Select your nationality',
        elementType: 'select',
        options: [
            { id: 'eg', label: 'Egyptian' },
            { id: 'sa', label: 'Saudi' },
            { id: 'ae', label: 'Emirati' },
            { id: 'us', label: 'American' },
        ],
    },
    {
        name: 'dob',
        label: 'Date of Birth',
        placeholder: 'Enter your date of birth',
        elementType: 'input',
        type: 'date',
    },
    {
        name: 'gender',
        label: 'Gender',
        elementType: 'radio',
        options: [
            { id: 'male', label: 'Male' },
            { id: 'female', label: 'Female' },
        ],
    },
    {
        name: 'password',
        label: 'password',
        placeholder: 'Enter your password',
        elementType: 'input',
        type: 'password',
    },
    {
        name: 'confirmPassword',
        label: 'Confirm password',
        placeholder: 'Confirm password',
        elementType: 'input',
        type: 'password',
    }
]

export const myProfileFormControls = [
    {
        name: 'firstname',
        label: 'First Name',
        placeholder: 'Enter your first name',
        elementType: 'input',
        type: 'text',
    },
    {
        name: 'lastname',
        label: 'Last Name',
        placeholder: 'Enter your last name',
        elementType: 'input',
        type: 'text',
    },
    {
        name: 'nationality',
        label: 'Nationality',
        placeholder: 'Select your nationality',
        elementType: 'select',
        options: [
            { id: 'eg', label: 'Egyptian' },
            { id: 'sa', label: 'Saudi' },
            { id: 'ae', label: 'Emirati' },
            { id: 'us', label: 'American' },
        ],
    },
    {
        name: 'dob',
        label: 'Date of Birth',
        placeholder: 'Enter your date of birth',
        elementType: 'input',
        type: 'date',
    },
    {
        name: 'gender',
        label: 'Gender',
        elementType: 'radio',
        options: [
            { id: 'male', label: 'Male' },
            { id: 'female', label: 'Female' },
        ],
    },
    {
        name: 'email',
        label: 'Email.',
        placeholder: 'Enter your email',
        elementType: 'input',
        type: 'email',
    },
    {
        name: 'phoneNo',
        label: 'Phone Number.',
        placeholder: 'Enter your phone number',
        elementType: 'input',
        type: 'number',
    },
]

export const addressFormControls = [
    {
        name: 'name',
        label: 'full name',
        placeholder: 'Enter your full name',
        elementType: 'input',
        type: 'text',
    },
    {
        name: 'phoneNo',
        label: 'Phone No.',
        placeholder: 'Enter your phone number',
        elementType: 'input',
        type: 'number',
    },
    {
        name: 'fullAddress',
        label: 'Full Address',
        placeholder: 'Enter your full address',
        elementType: 'input',
        type: 'text',
    },
    {
        name: 'city',
        label: 'city',
        placeholder: 'Enter your city',
        elementType: 'input',
        type: 'text',
    },
    {
        name: 'landmark',
        label: 'Landmark',
        placeholder: 'Enter the neareset landmark',
        elementType: 'input',
        type: 'text',
    },
    {
        name: 'buildingNo',
        label: 'Building No.',
        placeholder: 'Enter your building number',
        elementType: 'input',
        type: 'number',
    },
    {
        name: 'floorNo',
        label: 'Floor No.',
        placeholder: 'Enter your floor number',
        elementType: 'input',
        type: 'number',
    },
    {
        name: 'aptNo',
        label: 'Apartment No.',
        placeholder: 'Enter your apartment number',
        elementType: 'input',
        type: 'number',
    }
]

export const loginFormControls = [
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        elementType: 'input',
        type: 'text',
    },
    {
        name: 'password',
        label: 'password',
        placeholder: 'Enter your password',
        elementType: 'input',
        type: 'password',
    },
]

export const updateUserDataControls = [
    {
        name: 'firstname',
        label: 'first name',
        placeholder: 'Enter your first name',
        elementType: 'input',
        type: 'text',
    },
    {
        name: 'lastname',
        label: 'last name',
        placeholder: 'Enter your last name',
        elementType: 'input',
        type: 'text',
    },
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        elementType: 'input',
        type: 'text',
    },
    {
        name: 'mobile',
        label: 'mobile',
        placeholder: 'Enter your mobile number',
        elementType: 'input',
        type: 'number',
    },
]

export const base_url = "https://gamershub-backend-mern.vercel.app/api/";
