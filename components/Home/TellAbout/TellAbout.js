import ImageView from '@/components/Images';
import CommonTitle from '@/components/Common/CommonTitle';
import '@/styles/components/home/_tellabout.scss'

function TellAbout() {

    return (
        <>
            <section className='v_about'>
                <div className='v_container'>
                    <div className='v_about-inner'>
                        <CommonTitle title='Tell us about your best friend' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet eleifend pellentesque. ' tag='' />
                        <ImageView src={'/images/home/about/v_about.svg'} width={285} height={332} alt="v_about" />
                        <button className='v_button'>Get a free birthday gift</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TellAbout; 