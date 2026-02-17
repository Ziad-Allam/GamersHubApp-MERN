import React, { useEffect, useState } from 'react'
import Title from '../components/ui/Title'
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from '../features/auth/authSlice'
import { editUser, fetchProfile } from '../features/userSlice'
import { toast } from 'react-toastify'
import Form from '../components/common/Form'
import { myProfileFormControls } from '../components/common/config'
import useCheckToken from '../hooks/useCheckToken'

function Profile() {

    const { user } = useSelector((state) => state.auth)
    const { profile, error } = useSelector((state) => state.user)

    useCheckToken(error)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProfile())
    }, [dispatch]);

    const initialState = {
        firstname: '',
        lastname: '',
        email: '',
        phoneNo: '',
        gender: '',
        dob: '',
        nationality: '',
    }

    const [formData, setFormData] = useState(initialState)

    useEffect(() => {
        if (profile) {
            setFormData({
                firstname: profile.firstname || '',
                lastname: profile.lastname || '',
                email: profile.email || '',
                phoneNo: profile.mobile || '',
                gender: profile.gender || '',
                nationality: profile.nationality || '',
                dob: profile.dob
                    ? new Date(profile.dob).toISOString().split('T')[0]
                    : '',
            })
        }
    }, [profile])

    function onSubmit(event) {
        event.preventDefault()
        dispatch(editUser({
            userId: user?.id, formData
        })).then((data) => {
            if (data?.payload?.success) {
                toast.success("Personal details changed successfully")
                dispatch(checkAuth())
            }
        })
    }

    return (
        <>
            <Title>My Profile</Title>

            <div className="bg-white p-2 lg:p-8 rounded-md border border-gray-100 shadow-lg mx-auto">
                <Form
                    formControls={myProfileFormControls}
                    buttonText={'update'}
                    formData={formData}
                    setFormData={setFormData}
                    onSubmit={onSubmit}
                />
            </div>
        </>
    )
}

export default Profile
