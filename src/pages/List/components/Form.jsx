import React, { useState } from 'react';

const Form = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        country: "",
        typeofBussiness: "",
        interedtedIn: "",
        message: ""
    });
    return (
        <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-[3.125rem]">
                <div>
                    <label className=" inline-block text-[#222222] font-medium mb-2.5">First Name</label>
                    <div className="relative rounded-md">
                        <input
                            onChange={(e) => {
                                const value = e.target.value;
                                setForm({ ...form, firstName: value });
                            }}
                            value={form.firstName}
                            className="group form-input block transition ease-in-out duration-150 outline-none text-base text-[#222222] placeholder:text-[rgb(207 207 207/1)] px-3 h-[3.375rem] w-full rounded-md bg-[#f8f8f8] sm:leading-normal border-[rgb(207 207 207/1)] focus:border-[rgb(207 207 207/1)] focus:ring-[rgb(207 207 207/1)] border-2" />
                    </div>
                </div>

                <div>
                    <label className=" inline-block text-[#222222] font-medium mb-2.5">Last Name</label>
                    <div className="relative rounded-md">
                        <input
                            onChange={(e) => {
                                const value = e.target.value;
                                setForm({ ...form, lastName: value });
                            }}
                            value={form.lastName}
                            className="group form-input block transition ease-in-out duration-150 outline-none text-base text-[#222222] placeholder:text-[rgb(207 207 207/1)] px-3 h-[3.375rem] w-full rounded-md bg-[#f8f8f8] sm:leading-normal border-[rgb(207 207 207/1)] focus:border-[rgb(207 207 207/1)] focus:ring-[rgb(207 207 207/1)] border-2" />
                    </div>
                </div>

                <div>
                    <label className=" inline-block text-[#222222] font-medium mb-2.5">Email</label>
                    <div className="relative rounded-md">

                        <input
                            onChange={(e) => {
                                const value = e.target.value;
                                setForm({ ...form, email: value });
                            }}
                            value={form.email}
                            className="group form-input block transition ease-in-out duration-150 outline-none text-base text-[#222222] placeholder:text-[rgb(207 207 207/1)] px-3 h-[3.375rem] w-full rounded-md bg-[#f8f8f8] sm:leading-normal border-[rgb(207 207 207/1)] focus:border-[rgb(207 207 207/1)] focus:ring-[rgb(207 207 207/1)] border-2" />
                    </div>
                </div>

                <div>
                    <label className=" inline-block text-[#222222] font-medium mb-2.5">Phone Number</label>
                    <div className="relative rounded-md">

                        <input
                            onChange={(e) => {
                                const value = e.target.value;
                                setForm({ ...form, phoneNumber: value });
                            }}
                            value={form.phoneNumber}
                            className="group form-input block transition ease-in-out duration-150 outline-none text-base text-[#222222] placeholder:text-[rgb(207 207 207/1)] px-3 h-[3.375rem] w-full rounded-md bg-[#f8f8f8] sm:leading-normal border-[rgb(207 207 207/1)] focus:border-[rgb(207 207 207/1)] focus:ring-[rgb(207 207 207/1)] border-2" />
                    </div>
                </div>

                <div>
                    <label className=" inline-block text-[#222222] font-medium mb-2.5">Company Name</label>
                    <div className="relative rounded-md">

                        <input
                            onChange={(e) => {
                                const value = e.target.value;
                                setForm({ ...form, companyName: value });
                            }}
                            value={form.companyName}
                            className="group form-input block transition ease-in-out duration-150 outline-none text-base text-[#222222] placeholder:text-[rgb(207 207 207/1)] px-3 h-[3.375rem] w-full rounded-md bg-[#f8f8f8] sm:leading-normal border-[rgb(207 207 207/1)] focus:border-[rgb(207 207 207/1)] focus:ring-[rgb(207 207 207/1)] border-2" />
                    </div>
                </div>

                <div>
                    <label className=" inline-block text-[#222222] font-medium mb-2.5">Country Of Incorporation</label>
                    <div className="relative">
                        <div>
                            <div className="relative rounded-md">
                                <select
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setForm({ ...form, country: value });
                                    }}
                                    className="group form-select block transition ease-in-out duration-150 outline-none text-base text-secondary placeholder:text-[rgb(207 207 207/1)] px-3 h-[3.375rem] w-full rounded-md bg-[#f8f8f8] sm:leading-normal border-[rgb(207 207 207/1)] focus:border-[rgb(207 207 207/1)] focus:ring-[rgb(207 207 207/1)] border-2 text-p2 cursor-pointer appearance-none"
                                    defaultValue={form.country}>
                                    <option value="" disabled className='text-[#222222]'>Select an option</option>
                                    <option value="option1" className='text-[#222222]'>Option 1</option>
                                    <option value="option2" className='text-[#222222]'>Option 2</option>
                                </select>
                                <img className="absolute top-[50%] right-[15px] -traslate-y-[50%]" src="/assets/img/arrow-down.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <label className=" inline-block text-[#222222] font-medium mb-2.5">What Type Of Business Are You?</label>
                    <div className="relative">
                        <div>
                            <div className="relative rounded-md">
                                <select
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setForm({ ...form, typeofBussiness: value });
                                    }}
                                    className="group form-select block transition ease-in-out duration-150 outline-none text-base text-secondary placeholder:text-[rgb(207 207 207/1)] px-3 h-[3.375rem] w-full rounded-md bg-[#f8f8f8] sm:leading-normal border-[rgb(207 207 207/1)] focus:border-[rgb(207 207 207/1)] focus:ring-[rgb(207 207 207/1)] border-2 text-p2 cursor-pointer appearance-none"
                                    defaultValue={form.typeofBussiness}>
                                    <option value="" disabled className='text-[#222222]'>Select an option</option>
                                    <option value="option1" className='text-[#222222]'>Option 1</option>
                                    <option value="option2" className='text-[#222222]'>Option 2</option>
                                </select>
                                <img className="absolute top-[50%] right-[15px] -traslate-y-[50%]" src="/assets/img/arrow-down.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <label className=" inline-block text-[#222222] font-medium mb-2.5">I'm Interested In...</label>
                    <div className="relative">
                        <div>
                            <div className="relative rounded-md">
                                <select
                                    name="interestedIn"
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setForm({ ...form, interedtedIn: value });
                                    }}
                                    className="group form-select block transition ease-in-out duration-150 outline-none text-base text-secondary placeholder:text-[rgb(207 207 207/1)] px-3 h-[3.375rem] w-full rounded-md bg-[#f8f8f8] sm:leading-normal border-[rgb(207 207 207/1)] focus:border-[rgb(207 207 207/1)] focus:ring-[rgb(207 207 207/1)] border-2 text-p2 cursor-pointer appearance-none"
                                    defaultValue={form.interedtedIn}>
                                    <option value="" disabled className='text-[#222222]'>Select an option</option>
                                    <option value="option1" className='text-[#222222]'>Option 1</option>
                                    <option value="option2" className='text-[#222222]'>Option 2</option>
                                </select>
                                <img className="absolute top-[50%] right-[15px] -traslate-y-[50%]" src="/assets/img/arrow-down.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label className=" inline-block text-[#222222] font-medium mb-2.5">Message, If Any</label>
                    <textarea
                        onChange={(e) => {
                            const value = e.target.value;
                            setForm({ ...form, message: value });
                        }}
                        value={form.message}
                        className="group form-input block transition ease-in-out duration-150 outline-none text-base text-[#222222] placeholder:text-[rgb(207 207 207/1)] px-3 py-3 w-full rounded-md bg-[#f8f8f8] sm:leading-normal border-[rgb(207 207 207/1)] focus:border-[rgb(207 207 207/1)] focus:ring-[rgb(207 207 207/1)] border-2" rows="6">
                    </textarea>
                </div>
            </div>
            <div className='mt-6'>
                <button
                    type='submit'
                    onClick={(e) => {
                        e.preventDefault();
                        console.log(form);
                    }}
                    className='rounded-md w-36 border-0 bg-[#C6A459] py-3 px-7 block mx-auto text-white'>
                    Submit
                </button>
            </div>
        </form>
    );
};


export default Form;