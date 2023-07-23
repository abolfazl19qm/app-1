import {Product} from "./Product/index";
import React, {VFC} from "react";

interface ISectionProduct {
    title1: string;
    image1: string;
    price1: string;
    description1: string;
    Capacity1: string[];
    Discount1: string;
    btnText1: string;
    categories1: string[];
    categoriesLink1: string[];
    productId1: string;
    slideImage1: string[];

    title2: string;
    image2: string;
    price2: string;
    description2: string;
    Capacity2: string[];
    Discount2: string;
    btnText2: string;
    categories2: string[];
    categoriesLink2: string[];
    productId2: string;
    slideImage2: string[];

    title3: string;
    image3: string;
    price3: string;
    description3: string;
    Capacity3: string[];
    Discount3: string;
    btnText3: string;
    categories3: string[];
    categoriesLink3: string[];
    productId3: string;
    slideImage3: string[];

    title4: string;
    image4: string;
    price4: string;
    description4: string;
    Capacity4: string[];
    Discount4: string;
    btnText4: string;
    categories4: string[];
    categoriesLink4: string[];
    productId4: string;
    slideImage4: string[];

    title5: string;
    image5: string;
    price5: string;
    description5: string;
    Capacity5: string[];
    Discount5: string;
    btnText5: string;
    categories5: string[];
    categoriesLink5: string[];
    productId5: string;
    slideImage5: string[];

    title6: string;
    image6: string;
    price6: string;
    description6: string;
    Capacity6: string[];
    Discount6: string;
    btnText6: string;
    categories6: string[];
    categoriesLink6: string[];
    productId6: string;
    slideImage6: string[];

    CapacityTitle: string;
    categoriesTitle: string;
    btnText: string;
    bgColor: string;
    className?: string;
    refContainer?: React.Ref<HTMLDivElement>;

}

/**
 * Create a responsive section Product.
 * @param {string} title1 : The title of Product 1
 * @param {string} title2 : The title of Product 2
 * @param {string} title3 : The title of Product 3
 * @param {string} title4 : The title of Product 4
 * @param {string} title5 : The title of Product 5
 * @param {string} title6 : The title of Product 6
 * @param {string[]} image1 : The image Product 1
 * @param {string[]} image2 : The image Product 2
 * @param {string[]} image3 : The image Product 3
 * @param {string[]} image4 : The image Product 4
 * @param {string[]} image5 : The image Product 5
 * @param {string[]} image6 : The image Product 6
 * @param {string} description1 : The description 1
 * @param {string} description2 : The description 2
 * @param {string} description3 : The description 3
 * @param {string} description4 : The description 4
 * @param {string} description5 : The description 5
 * @param {string} description6 : The description 6
 * @param {string} price1 : The price 1
 * @param {string} price2 : The price 2
 * @param {string} price3 : The price 3
 * @param {string} price4 : The price 4
 * @param {string} price5 : The price 5
 * @param {string} price6 : The price 6
 * @param {string[]} categories1 : The Categories 1
 * @param {string[]} categories2 : The Categories 2
 * @param {string[]} categories3 : The Categories 3
 * @param {string[]} categories4 : The Categories 4
 * @param {string[]} categories5 : The Categories 5
 * @param {string[]} categories6 : The Categories 6
 * @param {string[]} categoriesTitle : The Categories Title
 * @param {string[]} slideImage1 : The image slid show 1
 * @param {string[]} slideImage2 : The image slid show 2
 * @param {string[]} slideImage3 : The image slid show 3
 * @param {string[]} slideImage4 : The image slid show 4
 * @param {string[]} slideImage5 : The image slid show 5
 * @param {string[]} slideImage6 : The image slid show 6
 * @param {string[]} Capacity1 : The Capacity 1
 * @param {string[]} Capacity2 : The Capacity 2
 * @param {string[]} Capacity3 : The Capacity 3
 * @param {string[]} Capacity4 : The Capacity 4
 * @param {string[]} Capacity5 : The Capacity 5
 * @param {string[]} Capacity6 : The Capacity 6
 * @param {string[]} categoriesLink1 : The Categories Links 1
 * @param {string[]} categoriesLink2 : The Categories Links 2
 * @param {string[]} categoriesLink3 : The Categories Links 3
 * @param {string[]} categoriesLink4 : The Categories Links 4
 * @param {string[]} categoriesLink5 : The Categories Links 5
 * @param {string[]} categoriesLink6 : The Categories Links 6
 * @param {string} productId1 : The id 1
 * @param {string} productId2 : The id 2
 * @param {string} productId3 : The id 3
 * @param {string} productId4 : The id 4
 * @param {string} productId5 : The id 5
 * @param {string} productId6 : The id 6
 * @param {string} Discount1 : The Discount 1
 * @param {string} Discount2 : The Discount 2
 * @param {string} Discount3 : The Discount 3
 * @param {string} Discount4 : The Discount 4
 * @param {string} Discount5 : The Discount 5
 * @param {string} Discount6 : The Discount 6
 * @param {string} CapacityTitle : The Capacity Title
 * @param {string} bgColor : To change background color
 * @param {string} btnText : To button text
 * @return {JSX.Element}
 * @author Abolfazl Mehdizade <Abolfazl19qm@gmail.com>
 */


export const SectionProduct: VFC<ISectionProduct> = ({
                                                         className = "",
                                                         refContainer,
                                                         title1 = "Bourbon Blend",
                                                         title2 = "Bourbon Blend",
                                                         title3 = "Bourbon Blend",
                                                         title4 = "Bourbon Blend",
                                                         title5 = "Bourbon Blend",
                                                         title6 = "Bourbon Blend",
                                                         price1 = "$35.00 – $60.00",
                                                         price2 = "$35.00 – $60.00",
                                                         price3 = "$35.00 – $60.00",
                                                         price4 = "$35.00 – $60.00",
                                                         price5 = "$35.00 – $60.00",
                                                         price6 = "$35.00 – $60.00",
                                                         image1 = "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1-600x600.webp",
                                                         image2 = "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic2-600x600.webp",
                                                         image3 = "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic3-600x600.webp",
                                                         image4 = "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic4-600x600.webp",
                                                         image5 = "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic5-600x600.webp",
                                                         image6 = "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic6-600x600.webp",
                                                         description1 = "Phasellus ornare magna quis neque ut venenatis consequat. Morbi facilisis nunc, ac erat velit odio fermentum wisi, mollis lobortis. Maecenas in posuere dui. Morbi urna quis arcu.",
                                                         description2 = "Phasellus ornare magna quis neque ut venenatis consequat. Morbi facilisis nunc, ac erat velit odio fermentum wisi, mollis lobortis. Maecenas in posuere dui. Morbi urna quis arcu.",
                                                         description3 = "Phasellus ornare magna quis neque ut venenatis consequat. Morbi facilisis nunc, ac erat velit odio fermentum wisi, mollis lobortis. Maecenas in posuere dui. Morbi urna quis arcu.",
                                                         description4 = "Phasellus ornare magna quis neque ut venenatis consequat. Morbi facilisis nunc, ac erat velit odio fermentum wisi, mollis lobortis. Maecenas in posuere dui. Morbi urna quis arcu.",
                                                         description5 = "Phasellus ornare magna quis neque ut venenatis consequat. Morbi facilisis nunc, ac erat velit odio fermentum wisi, mollis lobortis. Maecenas in posuere dui. Morbi urna quis arcu.",
                                                         description6 = "Phasellus ornare magna quis neque ut venenatis consequat. Morbi facilisis nunc, ac erat velit odio fermentum wisi, mollis lobortis. Maecenas in posuere dui. Morbi urna quis arcu.",
                                                         categories1 = ["ornare", "Blend"],
                                                         categories2 = ["ornare", "Blend"],
                                                         categories3 = ["ornare", "Blend"],
                                                         categories4 = ["ornare", "Blend"],
                                                         categories5 = ["ornare", "Blend"],
                                                         categories6 = ["ornare", "Blend"],
                                                         productId1 = "SKU: BE/WH/1252",
                                                         productId2 = "SKU: BE/WH/1252",
                                                         productId3 = "SKU: BE/WH/1252",
                                                         productId4 = "SKU: BE/WH/1252",
                                                         productId5 = "SKU: BE/WH/1252",
                                                         productId6 = "SKU: BE/WH/1252",
                                                         Discount1 = "10%",
                                                         Discount2 = "10%",
                                                         Discount3 = "40%",
                                                         Discount4 = "10%",
                                                         Discount5 = "70%",
                                                         Discount6 = "5%",
                                                         slideImage1 = ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1b.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1a.webp"],
                                                         slideImage2 = ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1b.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1a.webp"],
                                                         slideImage3 = ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1b.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1a.webp"],
                                                         slideImage4 = ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1b.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1a.webp"],
                                                         slideImage5 = ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1b.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1a.webp"],
                                                         slideImage6 = ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1b.webp", "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-product-pic1a.webp"],
                                                         categoriesLink1 = ["/", "/"],
                                                         categoriesLink2 = ["/", "/"],
                                                         categoriesLink3 = ["/", "/"],
                                                         categoriesLink4 = ["/", "/"],
                                                         categoriesLink5 = ["/", "/"],
                                                         categoriesLink6 = ["/", "/"],
                                                         bgColor = "#2a2a2a",
                                                         categoriesTitle = "Categories",
                                                         CapacityTitle = "Capacity",
                                                         btnText = "Add",
                                                         Capacity1 = ["1 L", "950 Ml", "2 L"],
                                                         Capacity2 = ["0.5 L", "750 Ml", "2 L"],
                                                         Capacity3 = ["330 Ml", "2 L"],
                                                         Capacity4 = ["550 Ml", "1 L"],
                                                         Capacity5 = ["780 Ml"],
                                                         Capacity6 = ["200 Ml"],

                                                     }) => {
    const Products = [
        {
            title: title1,
            image: image1,
            price: price1,
            bgColor: bgColor,
            description: description1,
            Capacity: Capacity1,
            Discount: Discount1,
            btnText: btnText,
            CapacityTitle: CapacityTitle,
            categories: categories1,
            categoriesTitle: categoriesTitle,
            categoriesLink: categoriesLink1,
            productId: productId1,
            slideImage: slideImage1,
        },
        {
            title: title2,
            image: image2,
            price: price2,
            bgColor: bgColor,
            description: description2,
            Capacity: Capacity2,
            Discount: Discount2,
            btnText: btnText,
            CapacityTitle: CapacityTitle,
            categories: categories2,
            categoriesTitle: categoriesTitle,
            categoriesLink: categoriesLink2,
            productId: productId2,
            slideImage: slideImage2,
        },
        {
            title: title3,
            image: image3,
            price: price3,
            bgColor: bgColor,
            description: description3,
            Capacity: Capacity3,
            Discount: Discount3,
            btnText: btnText,
            CapacityTitle: CapacityTitle,
            categories: categories3,
            categoriesTitle: categoriesTitle,
            categoriesLink: categoriesLink3,
            productId: productId3,
            slideImage: slideImage3,
        },
        {
            title: title4,
            image: image4,
            price: price4,
            bgColor: bgColor,
            description: description4,
            Capacity: Capacity4,
            Discount: Discount4,
            btnText: btnText,
            CapacityTitle: CapacityTitle,
            categories: categories4,
            categoriesTitle: categoriesTitle,
            categoriesLink: categoriesLink4,
            productId: productId4,
            slideImage: slideImage4,
        },
        {
            title: title5,
            image: image5,
            price: price5,
            bgColor: bgColor,
            description: description5,
            Capacity: Capacity5,
            Discount: Discount5,
            btnText: btnText,
            CapacityTitle: CapacityTitle,
            categories: categories5,
            categoriesTitle: categoriesTitle,
            categoriesLink: categoriesLink5,
            productId: productId5,
            slideImage: slideImage5,
        },
        {
            title: title6,
            image: image6,
            price: price6,
            bgColor: bgColor,
            description: description6,
            Capacity: Capacity6,
            Discount: Discount6,
            btnText: btnText,
            CapacityTitle: CapacityTitle,
            categories: categories6,
            categoriesTitle: categoriesTitle,
            categoriesLink: categoriesLink6,
            productId: productId6,
            slideImage: slideImage6,
        },
    ]
    return (
        <section
            ref={refContainer}
            className={className + " grid grid-cols-6 xl:w-[70%] relative overflow-hidden lg:w-[75%] md:w-[80%] w-[90%] xl:h-[900px] mx-auto gap-10"}>
            {Products.map((value) => (
                <Product {...value} key={value.title}/>
            ))}
        </section>)
}