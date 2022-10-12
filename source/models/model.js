import mongoose from "mongoose";
import Company from "./Company.js";
import express from "express";
import cors from "cors";

const APP = express();

APP.use(cors({}));

mongoose.connect("mongodb://localhost/LogisticsSystemDB");

async function createCompany() {

    try {
        const company = await Company.create ({

            name: "LagerBanken AB",

            warehouses: [{

                name: "LagerBanken Stockholm-Kista",

                products: [{

                    name: "iPhone 14",

                    quantity: 200,

                    location: 440,

                    price: 799, // USD

                    weight: 172, // g
                }],
            }],

            employees: [{

                name: "Adam Bertilsson",
                role: "Driver",
                schedule: "Monday to Friday, 9 AM to 5 PM",
            }],
        });

        logDataToConsole(company);
    }

    catch (e) {
        console.log(e.message);
    }

};

let logDataToConsole = (company) => {

    console.log(company.name);
    
    company.warehouses.forEach(warehouse => {
        
        console.log("\nWAREHOUSE");
        console.log(warehouse.name);

        warehouse.products.forEach(product => {

            console.log("\nPRODUCT");
            console.log(`${product.name}\nIn stock: ${product.quantity}\nOn shelf: ${product.location}\nFor: $${product.price}\nWeighs: ${product.weight} g`);
        })
    });
}

createCompany();