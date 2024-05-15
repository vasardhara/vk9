
import ImageView from '@/components/Images';
import '@/styles/components/home/_product.scss'

function ProductLogo() {

    return (
        <>
            <section className='v_product'>
                <div className='v_container'>
                    <div className='v_product-logo'>
                        <div className='v_product-logo-inner'>
                            <ImageView src={'/images/home/product/v_product-1.svg'} className='v_w-full v_h-full' alt="v_product-1" />
                        </div>
                        <div className='v_product-logo-inner'>
                            <ImageView src={'/images/home/product/v_product-2.svg'} className='v_w-full v_h-full' alt="v_product-2" />
                        </div>
                        <div className='v_product-logo-inner'>
                            <ImageView src={'/images/home/product/v_product-3.svg'} className='v_w-full v_h-full' alt="v_product-3" />
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default ProductLogo; 