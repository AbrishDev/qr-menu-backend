const Menu = require('../models/Menu');

// ✅ Get All Menu Items
exports.getMenu = async (req, res) => {
    try {
       const menu = await Menu.find();
        const formattedMenu = menu.map(item => ({
            ...item._doc, 
            price: `ETB ${item.price}` // Add currency format
        }));
        res.json(formattedMenu);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// ✅ Get Single Menu Item by ID
exports.getMenuItem = async (req, res) => {
    try {
        const menuItem = await Menu.findById(req.params.id);
        if (!menuItem) return res.status(404).json({ message: "Menu item not found" });

        res.json(menuItem);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// ✅ Add a New Menu Item (Admin Only)
exports.addMenuItem = async (req, res) => {
    try {
        const { name, price, category } = req.body;
        const newItem = new Menu({ name, price, category });

        await newItem.save();
        res.status(201).json({ message: "Menu item added successfully", menuItem: newItem });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// ✅ Update a Menu Item (Admin Only)
exports.updateMenuItem = async (req, res) => {
    try {
        const updatedItem = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: "Menu item not found" });

        res.json({ message: "Menu item updated successfully", menuItem: updatedItem });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// ✅ Delete a Menu Item (Admin Only)
exports.deleteMenuItem = async (req, res) => {
    try {
        const deletedItem = await Menu.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: "Menu item not found" });

        res.json({ message: "Menu item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};