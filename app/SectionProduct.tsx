import {Product} from "@/app/Pruduct";
import React, {VFC} from "react";


const data =
    {
        "Product_1": {
            "name": "Bourbon Blend",
            "price": "2000$",
            "caption": "Phasellus ornare magna quis neque ut venenatis consequat. Morbi facilisis nunc, ac erat velit odio fermentum wisi, mollis lobortis. Maecenas in posuere dui. Morbi urna quis arcu.",
            "images": "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1-600x600.webp",
            "buttonText": "add",
            "product_code": "11101-Pc",
            "slideImage": ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp"],
            "Capacity": ["100 Ml", "200 Ml"],
            "Discount": "10%",
            "CapacityTitle": "Capacity",
            "categoriesTitle": "Categories",
            "categories": ["none", "otherNone"],
            "categoriesLink": ["/", "/"],
        },
        "Product_2": {
            "name": "Bourbon Blend",
            "price": "2000$",
            "caption": "Phasellus ornare magna quis neque ut venenatis consequat. Morbi facilisis nunc, ac erat velit odio fermentum wisi, mollis lobortis. Maecenas in posuere dui. Morbi urna quis arcu.",
            "images": "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1-600x600.webp",
            "buttonText": "add",
            "product_code": "11101-Pc",
            "slideImage": ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp"],
            "Capacity": ["100 Ml", "200 Ml"],
            "CapacityTitle": "Capacity",
            "categoriesTitle": "Categories",
            "Discount": "10%",
            "categories": ["none", "otherNone"],
            "categoriesLink": ["/", "/"],
        },
        "Product_3": {
            "name": "Bourbon Blend",
            "price": "2000$",
            "caption": "Phasellus ornare magna quis neque ut venenatis consequat. Morbi facilisis nunc, ac erat velit odio fermentum wisi, mollis lobortis. Maecenas in posuere dui. Morbi urna quis arcu.",
            "images": "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1-600x600.webp",
            "buttonText": "add",
            "product_code": "11101-Pc",
            "slideImage": ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp"],
            "Capacity": ["100 Ml", "200 Ml"],
            "Discount": "10%",
            "CapacityTitle": "Capacity",
            "categoriesTitle": "Categories",
            "categories": ["none", "otherNone"],
            "categoriesLink": ["/", "/"],
        },
        "Product_4": {
            "name": "Bourbon Blend",
            "price": "2000$",
            "caption": "Phasellus ornare magna quis neque ut venenatis consequat. Morbi facilisis nunc, ac erat velit odio fermentum wisi, mollis lobortis. Maecenas in posuere dui. Morbi urna quis arcu.",
            "images": "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1-600x600.webp",
            "buttonText": "add",
            "product_code": "11101-Pc",
            "slideImage": ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp"],
            "Capacity": ["100 Ml", "200 Ml"],
            "Discount": "10%",
            "CapacityTitle": "Capacity",
            "categoriesTitle": "Categories",
            "categories": ["none", "otherNone"],
            "categoriesLink": ["/", "/"],
        },
        "Product_5": {
            "name": "Bourbon Blend",
            "price": "2000$",
            "caption": "Phasellus ornare magna quis neque ut venenatis consequat. Morbi facilisis nunc, ac erat velit odio fermentum wisi, mollis lobortis. Maecenas in posuere dui. Morbi urna quis arcu.",
            "images": "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1-600x600.webp",
            "buttonText": "add",
            "product_code": "11101-Pc",
            "slideImage": ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp"],
            "Capacity": ["100 Ml", "200 Ml"],
            "Discount": "10%",
            "CapacityTitle": "Capacity",
            "categoriesTitle": "Categories",
            "categories": ["none", "otherNone"],
            "categoriesLink": ["/", "/"],
        },
        "Product_6": {
            "name": "Bourbon Blend",
            "price": "2000$",
            "caption": "Phasellus ornare magna quis neque ut venenatis consequat. Morbi facilisis nunc, ac erat velit odio fermentum wisi, mollis lobortis. Maecenas in posuere dui. Morbi urna quis arcu.",
            "images": "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1-600x600.webp",
            "buttonText": "add",
            "product_code": "11101-Pc",
            "slideImage": ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp"],
            "Capacity": ["100 Ml", "200 Ml"],
            "Discount": "10%",
            "CapacityTitle": "Capacity",
            "categoriesTitle": "Categories",
            "categories": ["none", "otherNone"],
            "categoriesLink": ["/", "/"],
        },
    }

interface ISectionProduct {
    btnText: string;
    btnColor: string;
    bgColor: string;
    titleColor: string;
    captionColor: string;
    className?: string;
    refContainer?: React.Ref<HTMLDivElement>;

}

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
            image: data.Product_1.images,
            price: data.Product_1.price,
            bgColor: bgColor,
            description: data.Product_1.caption,
            Capacity: data.Product_1.Capacity,
            Discount: data.Product_1.Discount,
            btnText: btnText,
            CapacityTitle: data.Product_1.CapacityTitle,
            categories: data.Product_1.categories,
            categoriesTitle: data.Product_1.categoriesTitle,
            categoriesLink: data.Product_1.categoriesLink,
            productId: data.Product_1.product_code,
            slideImage: data.Product_1.slideImage,
        },
        {
            title: data.Product_2.name,
            image: data.Product_2.images,
            price: data.Product_2.price,
            bgColor: bgColor,
            description: data.Product_2.caption,
            Capacity: data.Product_2.Capacity,
            Discount: data.Product_2.Discount,
            btnText: btnText,
            CapacityTitle: data.Product_2.CapacityTitle,
            categories: data.Product_2.categories,
            categoriesTitle: data.Product_2.categoriesTitle,
            categoriesLink: data.Product_2.categoriesLink,
            productId: data.Product_2.product_code,
            slideImage: data.Product_2.slideImage,
        },
        {
            title: data.Product_3.name,
            image: data.Product_3.images,
            price: data.Product_3.price,
            bgColor: bgColor,
            description: data.Product_3.caption,
            Capacity: data.Product_3.Capacity,
            Discount: data.Product_3.Discount,
            btnText: btnText,
            CapacityTitle: data.Product_3.CapacityTitle,
            categories: data.Product_3.categories,
            categoriesTitle: data.Product_3.categoriesTitle,
            categoriesLink: data.Product_3.categoriesLink,
            productId: data.Product_3.product_code,
            slideImage: data.Product_3.slideImage,
        },
        {
            title: data.Product_4.name,
            image: data.Product_4.images,
            price: data.Product_4.price,
            bgColor: bgColor,
            description: data.Product_4.caption,
            Capacity: data.Product_4.Capacity,
            Discount: data.Product_4.Discount,
            btnText: btnText,
            CapacityTitle: data.Product_4.CapacityTitle,
            categories: data.Product_4.categories,
            categoriesTitle: data.Product_4.categoriesTitle,
            categoriesLink: data.Product_4.categoriesLink,
            productId: data.Product_4.product_code,
            slideImage: data.Product_4.slideImage,
        },
        {
            title: data.Product_5.name,
            image: data.Product_5.images,
            price: data.Product_5.price,
            bgColor: bgColor,
            description: data.Product_5.caption,
            Capacity: data.Product_5.Capacity,
            Discount: data.Product_5.Discount,
            btnText: btnText,
            CapacityTitle: data.Product_5.CapacityTitle,
            categories: data.Product_5.categories,
            categoriesTitle: data.Product_5.categoriesTitle,
            categoriesLink: data.Product_5.categoriesLink,
            productId: data.Product_5.product_code,
            slideImage: data.Product_5.slideImage,
        },
        {
            title: data.Product_6.name,
            image: data.Product_6.images,
            price: data.Product_6.price,
            bgColor: bgColor,
            description: data.Product_6.caption,
            Capacity: data.Product_6.Capacity,
            Discount: data.Product_6.Discount,
            btnText: btnText,
            CapacityTitle: data.Product_6.CapacityTitle,
            categories: data.Product_6.categories,
            categoriesTitle: data.Product_6.categoriesTitle,
            categoriesLink: data.Product_6.categoriesLink,
            productId: data.Product_6.product_code,
            slideImage: data.Product_6.slideImage,
        }
    ]
    return (
        <section
            ref={refContainer}
            className={className +  " grid grid-cols-6 xl:w-[70%] relative overflow-hidden lg:w-[75%] md:w-[80%] w-[90%] xl:h-[1100px] mx-auto gap-10"}>
            {Products.map((value) => (
                <Product btnColor={btnColor} titleColor={titleColor} captionColor={captionColor} {...value} key={value.title}/>
            ))}
        </section>)
}