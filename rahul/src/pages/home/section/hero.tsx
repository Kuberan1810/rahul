import heroImgUrl from "../../../assets/home/rahul.svg"


const hiSvgUrl = "https://cdn.prod.website-files.com/669a015f62a99f6f75e92ebb/66a34273d71d220abd8f692c_hi.svg";
const cloudIconUrl = "https://cdn.prod.website-files.com/669a015f62a99f6f75e92ebb/669e2d9c43baf4fba3c09413_cloud-arrow-down-fill.svg";
const cvPdfUrl = "https://cdn.prod.website-files.com/669a015f62a99f6f75e92ebb/66de8d010bc3de8a9fe4454d_voss-cv.pdf";
export const Hero = () => {
    return (
        <section data-w-id="832fef14-836f-f606-3136-324046d72611" className="hero-section GlobalPadding ">
            <div className="w-layout-blockcontainer container w-container">
                <div data-w-id="2d8052cc-6641-bd52-6174-af81b83fd02d" className="hero-content">
                    <a href="mailto:rahulrajanvasudeavan@gmail.com" className="hero-email">
                        rahulrajanvasudeavan@gmail.com
                    </a>

                    <div className="hero-title-wrap">
                        <img
                            src={hiSvgUrl}
                            loading="lazy"
                            alt=""
                            className="hero-title-icon"
                        />
                        <h1 className="hero-title">Hi, I'm Rahul!</h1>
                    </div>

                    <p className="hero-description">Developer and Startup entrepreneur</p>

                    <img
                        src={heroImgUrl}
                        loading="eager"
                        alt="Hero image"
                        className="hero-image"
                    />

                    <div className="hero-bottom">
                        <a
                            href={cvPdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-black w-inline-block"
                        >
                            <img
                                src={cloudIconUrl}
                                loading="lazy"
                                alt=""
                                className="button-icon"
                            />
                            <div>Download CV</div>
                        </a>
                        <div>Chennai, TN, IND</div>
                    </div>
                </div>
            </div>

            <div data-w-id="94edc54b-ddb9-4dc3-baec-d8d69155b554" className="marquee-item">
                <div className="marquee-list two">
                    <h2 className="marquee-title">RAHUL</h2>
                    <h2 className="marquee-title">UI & UX DESIGNER</h2>
                    <h2 className="marquee-title">RAHUL</h2>
                    <h2 className="marquee-title">UI & UX DESIGNER</h2>
                </div>
            </div>
        </section>
    );
};

export default Hero;
