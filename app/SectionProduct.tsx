import {Product} from "@/app/Pruduct";
import {VFC} from "react";

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

}

export const SectionProduct: VFC<ISectionProduct> = ({
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
            className={"grid grid-cols-6 xl:w-[70%] relative overflow-hidden lg:w-[75%] md:w-[80%] w-[90%] xl:h-[900px] mx-auto gap-10"}>
            {Products.map((value) => (
                <Product {...value} key={value.title}/>
            ))}

        </section>
    )
}