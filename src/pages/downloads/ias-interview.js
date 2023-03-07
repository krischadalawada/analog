import Head from 'next/head';
import Footer from '../../../components/Common-A/Footer';
import Header from '../../../components/Home-A/Header';
import ContactUs from '../../../components/Contact/ContactUs';
import HeroDownloads from '../../../components/Downloads-A/HeroDownloads';
import DownloadTabs from '../../../components/Downloads-A/DownloadTabs';
import DownloadsGrid from '../../../components/Downloads-A/DownloadsGrid';
import { DownloadsData } from '../../../data/DownloadsData';

const IASInt = () => {
    return (
        <>
            <Head>
                <title>IAS Interview</title>
            </Head>

            <Header />
            <HeroDownloads title="IAS Interviews" />
            <>
                <section className="slider__area pt-60 pb-60 include-bg d-flex align-items-center" style={{ caretColor: 'transparent' }}>
                    <div className="container">
                        <div className='col-xl-12 col-md-12 col-12 m-auto'>
                            <table className='downloads-table'>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Download</th>
                                </tr>
                                {DownloadsData[6].list.map((val, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{key + 1}</td>
                                            <td>{val.title}</td>
                                            <td><a href={val.link + val.path} target="_blank" rel="noopener noreferrer">Download</a></td>
                                        </tr>
                                    )
                                })}
                            </table>
                        </div>
                    </div>
                </section>
            </>
            <Footer />
        </>
    );
};

export default IASInt;