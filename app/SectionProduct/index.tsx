import {Product} from "./Product/index";
import React, {VFC} from "react";


const data =
    {
        "Product_1": {
            "name": "Bourbon Blend",
            "price": 2000,
            "caption": "Phasellus ornare magna quis neque ut venenatis consequat. Morbi facilisis nunc, ac erat velit odio fermentum wisi, mollis lobortis. Maecenas in posuere dui. Morbi urna quis arcu.",
            "images": ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1-600x600.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp"],
            "product_code": "11101-Pc",
            "discounts": {
                "discount": 10
            },
            "categoryName": "Categories",
            "categories": ["none", "otherNone"],
            "categoriesLink": ["/", "/"],
        },
        "Product_2": {
            "name": "Bourbon Blend",
            "price": 2000,
            "caption": "Phasellus ornare magna quis neque ut venenatis consequat. Morbi facilisis nunc, ac erat velit odio fermentum wisi, mollis lobortis. Maecenas in posuere dui. Morbi urna quis arcu.",
            "images": ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1-600x600.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp"],
            "product_code": "11101-Pc",
            "categoryName": "Categories",
            "discounts": {
                "discount": 10
            },
            "categories": ["none", "otherNone"],
            "categoriesLink": ["/", "/"],
        },
        "Product_3": {
            "name": "Bourbon Blend",
            "price": 2000,
            "caption": "Phasellus ornare magna quis neque ut venenatis consequat. Morbi facilisis nunc, ac erat velit odio fermentum wisi, mollis lobortis. Maecenas in posuere dui. Morbi urna quis arcu.",
            "images": ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1-600x600.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp"],
            "product_code": "11101-Pc",
            "discounts": {
                "discount": 10
            },
            "categoryName": "Categories",
            "categories": ["none", "otherNone"],
            "categoriesLink": ["/", "/"],
        },
        "Product_4": {
            "name": "Bourbon Blend",
            "price": 2000,
            "caption": "Phasellus ornare magna quis neque ut venenatis consequat. Morbi facilisis nunc, ac erat velit odio fermentum wisi, mollis lobortis. Maecenas in posuere dui. Morbi urna quis arcu.",
            "images": ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1-600x600.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp"],
            "product_code": "11101-Pc",
            "discounts": {
                "discount": 10
            },
            "categoryName": "Categories",
            "categories": ["none", "otherNone"],
            "categoriesLink": ["/", "/"],
        },
        "Product_5": {
            "name": "Bourbon Blend",
            "price": 2000,
            "caption": "Phasellus ornare magna quis neque ut venenatis consequat. Morbi facilisis nunc, ac erat velit odio fermentum wisi, mollis lobortis. Maecenas in posuere dui. Morbi urna quis arcu.",
            "images": ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1-600x600.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp"],
            "product_code": "11101-Pc",
            "discounts": {
                "discount": 10
            },
            "categoryName": "Categories",
            "categories": ["none", "otherNone"],
            "categoriesLink": ["/", "/"],
        },
        "Product_6": {
            "name": "Bourbon Blend",
            "price": 2000,
            "caption": "Phasellus ornare magna quis neque ut venenatis consequat. Morbi facilisis nunc, ac erat velit odio fermentum wisi, mollis lobortis. Maecenas in posuere dui. Morbi urna quis arcu.",
            "images": ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1-600x600.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp"],
            "product_code": "11101-Pc",
            "discounts": {
                "discount": 10
            },
            "categoryName": "Categories",
            "categories": ["none", "otherNone"],
            "categoriesLink": ["/", "/"],
        },
    }

export interface ISectionProduct {
    btnText: string;
    btnColor: string;
    titleColor: string;
    captionColor: string;
    bgColor: string;
    className?: string;
    refContainer?: React.Ref<HTMLDivElement>;

}

/**
 * Create a responsive section consisting of text at the left and Three images at the right.
 * @param {string} btnText : The button text
 * @param {string} btnColor : The button color
 * @param {string} titleColor : The Title color
 * @param {string} captionColor : The Caption color
 * @param {string} className : Class
 * @param {React.Ref.<HTMLDivElement>} refContainer : Ref
 * @param {string} bgColor : To change background color
 * @return {JSX.Element}
 * @author Abolfazl Mehdizade <Abolfazl19qm@gmail.com>
 */

export const SectionProduct: VFC<ISectionProduct> = ({
                                                         className = " ",
                                                         refContainer,
                                                         titleColor = "#ca8f65",
                                                         btnColor = "#ca8f65",
                                                         captionColor = "#8e8e8e",
                                                         bgColor = "#2a2a2a",
                                                         btnText = "Add",
                                                     }) => {
    const Products = [
        {
            title: data.Product_1.name,
            image: data.Product_1.images[0],
            price: data.Product_1.price,
            bgColor: bgColor,
            description: data.Product_1.caption,
            Discount: data.Product_1.discounts.discount,
            btnText: btnText,
            categories: data.Product_1.categories,
            categoriesTitle: data.Product_1.categoryName,
            categoriesLink: data.Product_1.categoriesLink,
            productId: data.Product_1.product_code,
            slideImage: data.Product_1.images,
        },
        {
            title: data.Product_2.name,
            image: data.Product_2.images[0],
            price: data.Product_2.price,
            bgColor: bgColor,
            description: data.Product_2.caption,
            Discount: data.Product_2.discounts.discount,
            btnText: btnText,
            categories: data.Product_2.categories,
            categoriesTitle: data.Product_2.categoryName,
            categoriesLink: data.Product_2.categoriesLink,
            productId: data.Product_2.product_code,
            slideImage: data.Product_2.images,
        },
        {
            title: data.Product_3.name,
            image: data.Product_3.images[0],
            price: data.Product_3.price,
            bgColor: bgColor,
            description: data.Product_3.caption,
            Discount: data.Product_3.discounts.discount,
            btnText: btnText,
            categories: data.Product_3.categories,
            categoriesTitle: data.Product_3.categoryName,
            categoriesLink: data.Product_3.categoriesLink,
            productId: data.Product_3.product_code,
            slideImage: data.Product_3.images,
        },
        {
            title: data.Product_4.name,
            image: data.Product_4.images[0],
            price: data.Product_4.price,
            bgColor: bgColor,
            description: data.Product_4.caption,
            Discount: data.Product_4.discounts.discount,
            btnText: btnText,
            categories: data.Product_4.categories,
            categoriesTitle: data.Product_4.categoryName,
            categoriesLink: data.Product_4.categoriesLink,
            productId: data.Product_4.product_code,
            slideImage: data.Product_4.images,
        },
        {
            title: data.Product_5.name,
            image: data.Product_5.images[0],
            price: data.Product_5.price,
            bgColor: bgColor,
            description: data.Product_5.caption,
            Discount: data.Product_5.discounts.discount,
            btnText: btnText,
            categories: data.Product_5.categories,
            categoriesTitle: data.Product_5.categoryName,
            categoriesLink: data.Product_5.categoriesLink,
            productId: data.Product_5.product_code,
            slideImage: data.Product_5.images,
        },
        {
            title: data.Product_6.name,
            image: data.Product_6.images[0],
            price: data.Product_6.price,
            bgColor: bgColor,
            description: data.Product_6.caption,
            Discount: data.Product_6.discounts.discount,
            btnText: btnText,
            categories: data.Product_6.categories,
            categoriesTitle: data.Product_6.categoryName,
            categoriesLink: data.Product_6.categoriesLink,
            productId: data.Product_6.product_code,
            slideImage: data.Product_6.images,
        }
    ]
    return (
        <section
            ref={refContainer}
            className={className + " grid grid-cols-6 xl:w-[70%] relative overflow-hidden lg:w-[75%] md:w-[80%] w-[90%] xl:h-[1100px] mx-auto gap-10"}>
            {Products.map((value, index) => (
                <Product btnColor={btnColor} titleColor={titleColor} captionColor={captionColor} {...value}
                         key={value.title + index}/>
            ))}
        </section>)
}