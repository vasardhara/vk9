
import ImageView from '@/components/Images';
import '@/styles/components/home/_client.scss'

function ClientLogo() {

    return (
        <>
            <section className='v_client'>
                <div className='v_container'>
                    <div className='v_client-logo'>
                        <div className='v_client-logo-inner'>
                            <ImageView src={'/images/home/client/v_client-1.svg'} className='v_w-full v_h-full' alt="v_client-1" />
                        </div>
                        <div className='v_client-logo-inner'>
                            <ImageView src={'/images/home/client/v_client-2.svg'} className='v_w-full v_h-full' alt="v_client-2" />
                        </div>
                        <div className='v_client-logo-inner'>
                            <ImageView src={'/images/home/client/v_client-3.svg'} className='v_w-full v_h-full' alt="v_client-3" />
                        </div>
                        <div className='v_client-logo-inner'>
                            <ImageView src={'/images/home/client/v_client-4.svg'} className='v_w-full v_h-full' alt="v_client-4" />
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default ClientLogo; 