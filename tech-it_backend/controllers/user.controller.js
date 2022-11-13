// const express, {request, response} = require("express")
const db = require("../config/db.config");

const getAllMembers = async (req, res) => {
  try {
    const assignees = await db.assignees.findMany({
      where: {
        user_type: "Employee",
      },
    });
    return res.json(assignees);
  } catch (e) {
    res.send(e.message);
  }
};

module.exports={
  getAllMembers
}