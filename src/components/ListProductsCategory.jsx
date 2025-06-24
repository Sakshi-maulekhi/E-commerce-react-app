import ProductCategory from './ProductCategory';
import productCategories from '../data/product-categories';

const ListProductsCategory = () => {
  return (
    <>
      <section className='categories'>
        <h1>Shop by Category</h1>
        <div className='categories-grid'>
          
            {productCategories.map((productCategory,index)=>(
              <ProductCategory key={index} productCategory={productCategory} />
            ))}
          {/* <ProductCategory
            productCategoryDetails={{
              name: 'Men',
              image: 'https://i.postimg.cc/pXx4vsBT/menstyle.avif',
            }}
          />
          <ProductCategory
            productCategoryDetails={{
              name: 'Woman',
              image: 'https://wallpapercave.com/wp/wp6130531.jpg',
            }}
          />
          <ProductCategory
            productCategoryDetails={{
              name: 'Kids',
              image: 'https://i.postimg.cc/Fzb6cShN/kidsstyle.avif',
            }}
          />
          <ProductCategory
            productCategoryDetails={{
              name: 'Home and Living',
              image: 'https://th.bing.com/th/id/OIP.dgnk3q7WDi3OElHt3poMmQHaE8?rs=1&pid=ImgDetMain',
            }}
          />
          <ProductCategory
            productCategoryDetails={{
              name: 'Beauty',
              image: 'https://i.postimg.cc/J45wHfhZ/beauty.avif',
            }}
          /> */}
        </div>
      </section>
    </>
  );
};

export default ListProductsCategory;