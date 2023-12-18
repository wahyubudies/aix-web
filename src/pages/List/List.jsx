import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Slider from './components/Slider';

const LIST_CARD = [
    {
        img: "https://www.aix.asia/_next/image?url=%2Fimg%2Ficons%2Freach_global_audience.png&w=1920&q=75",
        alt: "",
        title: "Reach Global Audience",
        desc: "Fractionalized ownership and digitized KYC onboarding processes allow issuers to globally reach both retail and institutional investors."
    },
    {
        img: "https://www.aix.asia/_next/image?url=%2Fimg%2Ficons%2Freach_global_audience.png&w=1920&q=75",
        alt: "",
        title: "Reduce Operation Costs",
        desc: "Smart contracts automate manual processes, cutting off middlemen and eliminating human error while increasing operational efficiency."
    },
    {
        img: "https://www.aix.asia/_next/image?url=%2Fimg%2Ficons%2Freach_global_audience.png&w=1920&q=75",
        alt: "",
        title: "Unlock Liquidity",
        desc: "Peer-to-peer transfers are achieved through automated compliance, while interoperability allows for easy connectivity with trading venues."
    },
    {
        img: "https://www.aix.asia/_next/image?url=%2Fimg%2Ficons%2Freach_global_audience.png&w=1920&q=75",
        alt: "",
        title: "Automate Compliance",
        desc: "Compliance rules are embedded into tokenized assets. The transfers of tokens can only be triggered between eligible investors."
    },
    {
        img: "https://www.aix.asia/_next/image?url=%2Fimg%2Ficons%2Freach_global_audience.png&w=1920&q=75",
        alt: "",
        title: "Record Keeping",
        desc: "All transactions on tokenized assets are automatically validated and recorded for asset owners and investors to access."
    },
    {
        img: "https://www.aix.asia/_next/image?url=%2Fimg%2Ficons%2Freach_global_audience.png&w=1920&q=75",
        alt: "",
        title: "Asset Traceability",
        desc: "Asset owners and investors can trace the whole history of activities performed over tokenized assets in our system anytime, anywhere."
    },
];

const LIST_REASON = [
    {
        img: "https://www.aix.asia/_next/image?url=%2Fimg%2Ficons%2Freach_global_audience.png&w=1920&q=75",
        alt: "",
        title: "Cost Effective",
        desc: "A.I.X platform enables users easy and convenient transactions, that are more cost effective. An increase in efficiency regarding the transaction execution is observable due to a faster processing."
    },
    {
        img: "https://www.aix.asia/_next/image?url=%2Fimg%2Ficons%2Freach_global_audience.png&w=1920&q=75",
        alt: "",
        title: "Faster Liquidity",
        desc: "A.I.X platform leverages blockchain technology to securitize assets, both traded and non-traded which also include increased liquidity, faster settlement, lower costs and bolstered risk management."
    },
    {
        img: "https://www.aix.asia/_next/image?url=%2Fimg%2Ficons%2Freach_global_audience.png&w=1920&q=75",
        alt: "",
        title: "Access To Market",
        desc: "A.I.X offers a unique selection of investments and competitive fees, which will attract both retail and institutions investors."
    }
];

const LIST_SLIDERS = [
    {
        img: "https://picsum.photos/id/1/856/601",
        alt: "",
        title: "Finance",
        desc: "Tokenization provides opportunities to finance companies with the ability to convert all non-fungible assets into digital crypto-currencies that can be transferred smoothly."
    },
    {
        img: "https://picsum.photos/id/13/856/601",
        alt: "",
        title: "Finance",
        desc: "Tokenization provides opportunities to finance companies with the ability to convert all non-fungible assets into digital crypto-currencies that can be transferred smoothly."
    },
    {
        img: "https://picsum.photos/id/6/856/601",
        alt: "",
        title: "Finance",
        desc: "Tokenization provides opportunities to finance companies with the ability to convert all non-fungible assets into digital crypto-currencies that can be transferred smoothly."
    }
];

const List = () => {
    return (
        <div className="bg-[url('/assets/img/aix_bg.png')] bg-right-top bg-[length:381px_459px] md:bg-[length:655px_788px] bg-no-repeat md:pt-25 pt-20">
            {/* container */}
            <div className="max-w-[1140px] mx-auto w-full h-full px-5 xs:px-10 xl:px-0 md:py-30 py-20 flex flex-col">

                {/* section 1 */}
                <div className='mb-32'>
                    <div className='mb-16'>
                        <h1 className="font-bold text-[35px] sm:text-[45px] xl:text-[60px] text-[#C6A459] leading-tight">
                            Public Listing: <br />
                            <span className="text-[#2D2F30]">
                                Tokenize &amp; List with us
                            </span>
                        </h1>
                        <div className="w-full md:w-1/2 mt-5">
                            <p className='text-[#222222]'>
                                Blockchain has the power to revolutionize the financial industry. Tokenizing equity opens up a plethora of new and exciting possibilities for both issuers and holders.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {LIST_CARD.map((card, index) => (
                            <Card key={index} item={card} />
                        ))}
                    </div>
                </div>
                {/* section 1 */}

                {/* slider */}
                <div className='mb-28'>
                    <Slider lists={LIST_SLIDERS} />
                </div>
                {/* slider */}

                {/* section 2 */}
                <div className='mb-28'>
                    <h4 className='text-[30px] md:text-[40px] font-semibold mb-10'>
                        Why list with AIX?
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {LIST_REASON.map((card, index) => (
                            <Card key={index} item={card} />
                        ))}
                    </div>
                </div>
                {/* section 2 */}

                {/* section 3 */}
                <div className='mb-28'>
                    <h4 className='text-[30px] md:text-[40px] font-semibold text-center'>
                        Application For Public Listing
                    </h4>
                    <p className='mt-3 md:mt-5 text-center'>
                        Provide us your details, and we will contact you to arrange an initial discussion shortly.
                    </p>
                    <Form />
                </div>
                {/* section 3 */}

            </div>
            {/* container */}
        </div>
    );
};

export default List;