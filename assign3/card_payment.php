<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="description" content="Demonstrates knowledge from the scope of the html and css."/>
    <meta name="keywords" content="HTML5, CSS"/>
    <meta name="author" content="Adam Jarzebak"/>

    <link rel="stylesheet" type="text/css" href="styles/style.css"/>

    <script src="scripts/part1.js"></script>


    <title>payment</title>

</head>
<body>

<main>
    <h2>Card Payment</h2>

    <section id="card_payment_section">

        <form id="payment_form" action="payment.php">

            <section class="test">

                <input type="text" name="card_number" id="card_number" maxlength="20" placeholder="0000 00000 00000 00000"/>
                <input type="text" name="card_name" id="card_name" maxlength="25" placeholder="John"/>
                <input type="text" name="expires" id="expires" maxlength="10" placeholder="01/14"/>
                <input type="text" name="cvv" id="cvv" maxlength="4" placeholder="CVV"/>

                <select id="card_type" name="card_type">
                    <option value="visa">Visa</option>
                    <option value="mastercard">MasterCard</option>
                    <option value="americanexpress">AmericanExperess</option>
                </select>

                <br/>
                <br/>
                <br/>
                <br/>

            </section>

            <section id="buttons_pay_page">
            <span>

                <input type="submit" value="Confirm Booking" id="card_confirmBooking"/>
                <!--<button type="submit" id="card_confirmBooking"><a href="payment.html">Confirm Payment</a></button>-->

                <input type="reset" value="Reset" id="card_cancel"/>

           </span>
            </section>

        </form>

    </section>

</main>


</body>
</html>