import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Order = ({ pizza }) => {
  const [showTitle, toggle] = useState(true);
  setTimeout(() => toggle(false), 1000);
  console.log(showTitle);
  return (
    <div className="container order">
      <AnimatePresence>
        {showTitle && (
          <motion.h2 exit={{ y: -1000 }}>Thank you for your order :)</motion.h2>
        )}
      </AnimatePresence>

      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </div>
  );
};

export default Order;
