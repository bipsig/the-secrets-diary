import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";


const yourUsername = "bipsig";
const yourPassword = "password";
const yourAPIKey = "51a46a5a-2ad8-42e7-aaff-8b9ec1214cad";
const yourBearerToken = "0ac848fb-a264-468c-b723-cdfcf05a37d8";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {

    try {
        const url = API_URL + "random"
        const response = await axios.get (url);

        // console.log (JSON.stringify(response.data));

        res.render("index.ejs", { content: JSON.stringify(response.data) });
    }
    catch (error) {
        console.error ("Error occured" + error);
        res.render("index.ejs", { content: "API Response." });
    }
});

app.get("/basicAuth",  async (req, res) => {
    try {
        const url = API_URL + "all?page=1";
        const response = await axios.get (url, {
            auth: {
                username: yourUsername,
                password: yourPassword
            },
        });

        console.log (response.data);

        res.render ("index.ejs", {
            content: JSON.stringify(response.data)
        })
    }
    catch (error) {
        console.error ("Error occured" + error);
        res.render("index.ejs", { content: error });
    }

});

app.get("/apiKey", async (req, res) => {
    try {
        const url = API_URL + `filter?score=3&apiKey=${yourAPIKey}`
        const response = await axios.get (url);

        console.log (response.data);

        res.render ("index.ejs", {
            content: JSON.stringify(response.data)
        })
    }
    catch (error) {
        console.error ("Error Occured: " + error);
        res.render ("index.ejs", { content: error });
    }
});

app.get("/bearerToken", async (req, res) => {
    try {
        const url = API_URL + `secrets/51`
        const response = await axios.get (url, {
            headers: {
                Authorization: `Bearer ${yourBearerToken}`
            }
        });

        console.log (response.data);

        res.render ("index.ejs", {
            content: JSON.stringify (response.data)
        })
    }
    catch (error) {
        console.error ("Error Occured: " + error);
        res.render ("index.ejs", { content: error });
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
