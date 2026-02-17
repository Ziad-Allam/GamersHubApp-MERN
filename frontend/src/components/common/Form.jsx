import React from 'react'
import Input from '../ui/Input';
import PrimaryButton from './buttons/PrimaryButton';

function Form({ formControls, formData, setFormData, onSubmit, buttonText }) {

    function renderElementByElementType(getControlItems) {
        let element = null

        // formData: to get the value
        const value = formData[getControlItems.name] || ''

        switch (getControlItems.elementType) {
            case 'input':
                element = (
                    <Input
                        type={getControlItems.type}
                        name={getControlItems.name}
                        placeholder={getControlItems.placeholder}
                        id={getControlItems.id}
                        value={value}
                        onChange={event => setFormData({ ...formData, [getControlItems.name]: event.target.value })}
                    />
                );
                break;
            case 'select':
                element = (
                    <select
                        className='w-full p-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                        onChange={event => setFormData({ ...formData, [getControlItems.name]: event.target.value })}
                        value={value}
                        name="" id=""
                    >
                        {
                            getControlItems.options.map(optionItems => (
                                <option key={optionItems.id} value={optionItems.id}>
                                    {optionItems.label}
                                </option>
                            ))

                        }
                    </select>
                );
                break;

            case 'radio':
                element = (
                    <div className="flex gap-6">
                        {getControlItems.options?.map(option => (
                            <label
                                key={option.id}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name={getControlItems.name}
                                    value={option.id}
                                    checked={value === option.id}
                                    onChange={e =>
                                        setFormData({
                                            ...formData,
                                            [getControlItems.name]: e.target.value,
                                        })
                                    }
                                    className="accent-blue-600"
                                />
                                <span className="capitalize">{option.label}</span>
                            </label>
                        ))}
                    </div>
                )
                break

            case 'textarea':
                element = (
                    <textarea
                        className='bg-gray-50'
                        name={getControlItems.name}
                        placeholder={getControlItems.placeholder}
                        id={getControlItems.id}
                        value={value}
                        onChange={event => setFormData({ ...formData, [getControlItems.name]: event.target.value })}
                    >
                    </textarea>
                );
                break;

            default:
                element = (
                    <Input
                        type={getControlItems.type}
                        name={getControlItems.name}
                        placeholder={getControlItems.placeholder}
                        id={getControlItems.id}
                        onChange={event => setFormData({ ...formData, [getControlItems.name]: event.target.value })}
                    />
                );
                break;
        }

        return element
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='flex flex-col gap-3 mb-5'>

                {
                    formControls.map(controlItems => {

                        return (
                            <div className='grid w-full gap-1.5' key={controlItems.name}>
                                <label htmlFor="" className='font-semibold capitalize'>{controlItems.label}</label>
                                {
                                    renderElementByElementType(controlItems)
                                }
                            </div>
                        )
                    })
                }
            </div>

            <PrimaryButton>
                {buttonText || 'Submit'}
            </PrimaryButton>

        </form>
    )
}

export default Form
