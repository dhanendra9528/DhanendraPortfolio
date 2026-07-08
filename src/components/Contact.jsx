import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append("access_key", "b2bb9cfb-9208-4b1e-ad5f-928b9976c8b6"); 
        data.append("fullName", formData.fullName);
        data.append("email", formData.email);
        data.append("phone", formData.phone);
        data.append("message", formData.message);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data,
            });

            const result = await response.json();

            if (result.success) {
                toast.success("Message Sent Successfully!");

                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            toast.error("Something went wrong!");
            console.log(error);
        }
    };

    return (
        <section id="contact" className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-14">
                    <h2 className="text-5xl font-bold">
                        Contact <span className="text-teal-600">Me</span>
                    </h2>

                    <p className="mt-4 text-gray-500">
                        Have a project in mind? Let's talk.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Left */}

                    <div className="flex flex-col justify-center">

                        <h3 className="text-3xl font-bold mb-6">
                            Let's Build Something Amazing
                        </h3>

                        <p className="text-gray-600 leading-8">
                            Whether you're looking for a modern website,
                            React application or Full Stack solution,
                            feel free to contact me.
                        </p>

                        <div className="mt-10 space-y-5">

                            <div>
                                <h4 className="font-semibold">Email</h4>
                                <p className="text-gray-600">
                                    rajputdhanendra620@gmail.com
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold">Location</h4>
                                <p className="text-gray-600">
                                    India
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Right */}

                    <div className="bg-white shadow-2xl rounded-2xl p-8">

                        <form onSubmit={onSubmit} className="space-y-6">

                            <div>

                                <label className="font-medium">
                                    Full Name *
                                </label>

                                <input
                                    type="text"
                                    name="fullName"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className="w-full mt-2 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600"
                                />

                            </div>

                            <div>

                                <label className="font-medium">
                                    Email *
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@gmail.com"
                                    className="w-full mt-2 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600"
                                />

                            </div>

                            <div>

                                <label className="font-medium">
                                    Contact Number (Optional)
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 XXXXXXXXXX"
                                    className="w-full mt-2 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-600"
                                />

                            </div>

                            <div>

                                <label className="font-medium">
                                    Message *
                                </label>

                                <textarea
                                    rows="6"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message..."
                                    className="w-full mt-2 rounded-lg border border-gray-300 px-4 py-3 outline-none resize-none focus:border-teal-600"
                                />

                            </div>

                            <button
                                type="submit"
                                className="w-full bg-zinc-700 hover:bg-zinc-800 text-white py-3 rounded-full font-semibold transition"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;