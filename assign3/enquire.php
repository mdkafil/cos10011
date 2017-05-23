<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="description" content="Demonstrates knowledge from the scope of the html and css." />
    <meta name="keywords" content="HTML5, CSS" />
    <meta name="author" content="Adam Jarzebak"  />

    <link rel="icon" type="image/png" href="images/icon_title.png" sizes="16x16">

    <link rel="stylesheet" type="text/css" href="styles/style.css"/>

    <script src="scripts/part1.js"></script>

    <title>SwinCruise - Enquires</title>

</head>

<body>

<?php include 'header.inc';?>

<main id="main_container">

    <section class="style_form">

        <h2>Make an enquiry</h2>

        <form id="enquire_form" action="process_order.php" novalidate="novalidate">

            <label for="fname">First Name</label>

            <input type="text" name= "First Name" id="fname" maxlength="25"/>

            <label for="lname">Last Name</label>
            <input type="text" name= "Last Name" id="lname" maxlength="25"/>

            <label for="email1">Email</label>
            <input type="email" name= "Email addresss" id="email1"/>

            <br/>
            <br/>

            <section id="fieldset_label">
                <label > Address</label>
            </section>

            <fieldset>
                <label for="saddress">Street address</label>
                <input type="text" name="Address" id="saddress" maxlength="40"/>

                <label for="suburb">Suburb/town</label>
                <input type="text" name= "Suburb" id="suburb" maxlength="20"/>

                <label for="state">State</label>
                <select id="state" name="State">
                    <option value="none">Please select</option>
                    <option value="VIC">VIC</option>
                    <option value="NSW">NSW</option>
                    <option value="QLD">QLD</option>
                    <option value="NT">NT</option>
                    <option value="WA">WA</option>
                    <option value="SA">SA</option>
                    <option value="TAS">TAS</option>
                    <option value="ACT">ACT</option>
                </select>

                <label for="postcode">Postcode</label>
                <input type="text" name= "Postcode" id="postcode" maxlength="4" placeholder="Postcode"/>

            </fieldset>

            <br/>

            <label>Preferred contact</label>

            <fieldset id="preferredContact">

                <p>
                    <label for="emailP">Email</label>
                    <input type="radio" id="emailP" name="Contact" value="email" checked='checked'/>
                    <span>
            <label for="post">Post</label>
                <input type="radio" id="post" name="Contact" value="post"/>
                </span>

                    <span>
            <label for="phone">Phone</label>
                <input type="radio" id="phone" name="Contact" value="phone"/>
                </span>
                </p>

            </fieldset>

            <br/>

            <label for="phoneNumber">Phone number</label>
            <input type="text" name="Phone Number" id="phoneNumber" maxlength="10" placeholder="Phone number"/>
            <br/>

            <label for="productService">Product/Service</label>
            <select id="productService" name="Product/service" onchange="updateCruisePrice()">
                <option value="none">Please select</option>
                <option value="op1">Norway</option>
                <option value="op2">Greece</option>
                <option value="op3">Africa</option>
                <option value="op4">Antarctica</option>
            </select>

            <section id="priceInfo">
                <p id="info">Selected cruise: -</p>
                <p id="info1"></p>
            </section>

            <h3 class="align_center">Number of Passengers</h3>

            <section class="align_center_table">
                <table>
                    <tr>
                        <th>Adults ( +18 years )</th>
                        <td>
                            <input type="number" id="noPeople" value="0" size="1" min="0" max="21"/>
                        </td>
                    </tr>
                    <tr>
                        <th>Children (0 - 17 years )</th>
                        <td>
                            <input type="number" id="noPeople1" value="0" size="1" min="0" max="21"/>
                        </td>
                    </tr>
                </table>
            </section>

            <br/>
            <br/>
            <label>Extras avaiable</label>

            <fieldset id="extrasal">
                <section class="align_center_table" id="cabins">

                    <table>
                        <tr>
                            <th>
                                <label for="extra1">Outside Cabin</label>
                                <input class="extras_class" type="checkbox" id="extra1" name="extra1" value="Outside Cabin"/>
                            </th>
                            <th>
                                <label for="extra2">Insurance</label>
                                <input class="extras_class" type="checkbox" id="extra2" name="extra2" value="Insurance"/>
                            </th>
                            <th>
                                <label for="extra3">Transfer</label>
                                <input class="extras_class" type="checkbox" id="extra3" name="extra3" value="Transfer"/>
                            </th>
                            <th>
                                <label for="extra4">Mini bar</label>
                                <input class="extras_class" type="checkbox" id="extra4" name="extra4" value="Mini bar"/>

                            </th>
                        </tr>
                        <tr>
                            <td>add 10% to price</td>
                            <td>add 300$ to price</td>
                            <td>add 10% to price</td>
                            <td>Included</td>
                        </tr>

                    </table>
                </section>

            </fieldset>

            <br/>
            <br/>
            <section>
                <label for="comm">Comments</label>
                <textarea class="comments" id="comm" name="Comments" rows="5" cols="110" placeholder="Write your comments here."></textarea>
            </section>

            <br/>
            <br/>
            <br/>

            <section class="align_center">
            <span>
            <input type="submit" value="Pay Now"/>
           <input type="reset" value="Reset"/>
           </span>
            </section>

        </form>
    </section>

    <footer>
        <hr/>
        <p>
            <strong>&#169;</strong>
            <a  href="http://www.swinburne.edu.au/">
                Swinburne Universty of Technology
            </a>
        </p>

        <p id="email_style">  &#160;
            &#160;
            <strong>Mark up by:</strong> <a href="mailto:adam@jarzebak.eu">
                Adam Jarzebak</a></p>

    </footer>

</main>

</body>
</html>