import React, { useEffect, useState } from "react";
import DropDown from "./DropDown";
import AuthInputField from "./InputField";
import axios from "axios";
import UpIcon from "../assets/UpIcon";
import { motion } from "framer-motion";
import AuthTextArea from "./AuthTextArea";
import Modal from "./Modal";

const budget = [
    { value: "$25-$50K" },
    { value: "$50-$100K" },
    { value: "$100-$200K" },
    { value: "Above$200K" },
];
const services = [
    { value: "Branding" },
    { value: "Design & UI/UX" },
    { value: "IOS App" },
    { value: "Android App" },
    { value: "Augmented Reality" },
    { value: "Virtual Reality" },
    { value: "Web App/Website" },
    { value: "Shopify" },
    { value: "Digital Commerce" },
    { value: "Wordpress" },
    { value: "Blockchain" },
    { value: "Artificial Intelligence" },
    { value: "Cloud Services" },
    { value: "DevOps" },
    { value: "Support & Maintenance" },
    { value: "Staff Augmentation" },
    { value: "Other" },
];

const animationVariants = {
    initial: {
        opacity: 0,
        x: -100,
    },
    animate: {
        opacity: 1,
        x: 0,
    },
};

const hoverVariants = {
    initial: {
        scale: 1,
    },
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
};
function EmailForm() {
    const [formData, setFormData] = useState<any>({});
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };
    const handleServicesChange = (value: any) => {
        setFormData({
            ...formData,
            services: value,
        });
    };

    const handleBudgetChange = (value: any) => {
        setFormData({
            ...formData,
            budget: value,
        });
    };


    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios
            .post("https://dyota-sendmail-api.onrender.com/mail/send", formData)
            .then((response: any) => {
                console.log(response);
                setSuccess(response.data);
                handleOpenModal()
            })
            .catch((error: any) => {
                console.error("Form submission error:", error);
            });
    };



    // useEffect(() => {
    //     console.log(formData, "formData");
    // }, [formData,]);


    return (

        <>
            
                { openModal && (
                    <Modal message={success} onClose={handleCloseModal} />
                )}
            
            <div className=" w-full h-full flex flex-col py-2 px-14 md:py-16">
                <div className="flex flex-col md:flex-col-reverse lg:flex-row gap-6 justify-center ">
                    <div className="w-full lg:w-[60%] flex flex-col gap-4 md:gap-10 justify-center ">
                        <motion.p
                            initial="initial"
                            animate="animate"
                            variants={animationVariants}
                            transition={{ duration: 1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold mt-10"
                        >
                            We’d love to
                            <span className="block">hear from you.</span>
                        </motion.p>
                        <motion.p initial="initial"
                            animate="animate"
                            variants={animationVariants}
                            transition={{ duration: 1 }}
                            className=" text-lg md:text-2xl md:leading-10">
                            Ready to create progress together? Tell us a little about your
                            project and we’ll connect with you within 24 hours.
                        </motion.p>
                    </div>
                    <motion.div
                        whileHover="hover"
                        initial="initial"
                        variants={hoverVariants}
                        className="w-full lg:w-[40%]  m-auto border-2 ">
                        <img
                            src="https://martech.org/wp-content/uploads/2017/08/emails-fly-II.png"
                            alt=""
                            className="h-[30vh] w-full m-auto"
                        />
                    </motion.div>
                </div>

                <div className="mt-10">
                    <p className="py-4">"*" indicates required fields</p>

                    <div className="flex flex-col md:flex-col lg:flex-row justify-center gap-10 ">
                        <div>
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col md:flex-row lg:flex-row gap-12">
                                    <AuthInputField
                                        heading="Name"
                                        formData={formData}
                                        setFormData={setFormData}
                                        value="name"
                                        placeholder="Enter your name"
                                        required={true}
                                    />
                                    <AuthInputField
                                        heading="Email"
                                        formData={formData}
                                        setFormData={setFormData}
                                        value="email"
                                        placeholder="Enter your email"
                                        required={true}
                                    />
                                </div>
                                <div className="flex flex-col md:flex-row  lg:flex-row gap-12">
                                    <AuthInputField
                                        heading="contact Number"
                                        formData={formData}
                                        setFormData={setFormData}
                                        value="phone_number"
                                        placeholder="Enter your contact number"
                                        required={true}
                                    />
                                    <AuthInputField
                                        heading="Location"
                                        formData={formData}
                                        setFormData={setFormData}
                                        value="location"
                                        placeholder="Enter your location"
                                        required={true}
                                    />
                                </div>
                                <div className="flex flex-col  md:flex-row  lg:flex-row gap-12">
                                    <AuthInputField
                                        heading="Organization"
                                        formData={formData}
                                        setFormData={setFormData}
                                        value="organization"
                                        placeholder="Enter your organization name"
                                        required={true}
                                    />
                                    <AuthInputField
                                        heading="Website"
                                        formData={formData}
                                        setFormData={setFormData}
                                        value="website"
                                        placeholder="Enter your website"
                                        required={true}
                                    />
                                </div>
                                <div className="flex flex-col md:flex-row  lg:flex-row  gap-12">
                                    <div className=" w-full lg:w-[30vw]">
                                        <DropDown
                                            options={budget}
                                            onChange={handleBudgetChange}
                                            headingLabel="Aprroximate budget"
                                        />
                                    </div>
                                    <div className=" w-full lg:w-[30vw] ">
                                        <DropDown
                                            options={services}
                                            onChange={handleServicesChange}
                                            headingLabel="Aprroximate budget"
                                        />
                                    </div>
                                </div>

                                <div className=" w-full">
                                    <AuthTextArea
                                        heading="PROJECT SUMMARY"
                                        formData={formData}
                                        setFormData={setFormData}
                                        value="summary"
                                        placeholder="Enter your project summary"
                                        required={true}
                                    />
                                </div>

                                <div className="w-full flex flex-col md:flex-col lg:flex-col gap-6 md:gap-12 justify-start mb-6 md:mb-0">
                                    <div>
                                        <p>
                                            By clicking the submit button you agree to our{" "}
                                            <span className="text-[#3BD188]">Privacy Policy</span>{" "}
                                            terms.
                                        </p>
                                    </div>

                                    <div className="cursor-pointer text-[#3BD188] flex items-center justify-center md:justify-start md:w-[15vw] text-start">
                                        <button onClick={handleSubmit} className="pr-2 ">
                                            SUBMIT
                                        </button>
                                        <div className="h-6 w-6">
                                            <UpIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={animationVariants}
                            transition={{ duration: 1 }} className="lex flex-col space-y-5 px-2 mb-10 md:mb-2">
                            <p className="text-lg font-bold">BUSINESS INQUIRIES</p>
                            <p className="text-md">
                                {" "}
                                If you have a project or just want to say hi, you can reach us
                                here:
                            </p>
                            <ul className=" underline ">
                                <li>info@cxr.agency</li>
                                <li>(917) 671-0551</li>
                            </ul>
                            <p className="text-lg font-bold">OFFICE ADDRESS</p>
                            <p>
                                If you’re ever in the area, feel free to stop by! You’ll find us
                                at:
                            </p>
                            <ul>
                                <li> 276 Greenpoint Ave </li>
                                <li> BLDG8/9, 2nd Floor </li>
                                <li> Brooklyn, NY 11222</li>
                            </ul>
                            <p className="text-lg font-bold">CAREERS</p>
                            <p>
                                If you’re an animator, designer or artist and would like to
                                collaborate, feel free to amaze us here:
                            </p>
                            <p className=" underline text-sm">careers@cxr.agency</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmailForm;
