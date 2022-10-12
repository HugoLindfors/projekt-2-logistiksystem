import mongoose from "mongoose";

const COMPANY_SCHEMA = new mongoose.Schema({

    name: { // namn

        type: String,
        required: true,
    },

    warehouses: [{ // lager

        name: { // lagernamn

            type: String,
            required: true,
        },

        products: [{ // produkt

            name: { // produktnamn

                type: String,
                required: true,
            },

            quantity: { // lagersaldo

                type: Number,
                required: true,
            },

            location: { // lagerplats

                type: Number,
                required: true,
            },

            price: { // produktpris

                type: Number,
                required: true,
            },

            weight: { // vikt

                type: Number,
                required: true,
            },
        }],
    }],

    employees: [{ // anställd

        name: { // namn

            type: String,
            required: true,
        },

        role: { // roll

            type: String,
            required: true,
        },

        schedule: { // schema

            type: String,
            required: true,
        },
    }],
});

export default mongoose.model("Company", COMPANY_SCHEMA);