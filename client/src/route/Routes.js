import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Gather from "../components/gather/Gather";
import Save from "../components/save/Save";
import Compete from "../components/compete/Compete";
import Profile from "../components/profile/Profile";
import CompeteDetail from "../components/compete/CompDetail";
import AddMilitarySavings from "../components/gather/addMilitarySavings/AddMilitarySavings";
import AvailableSavingItemDetail from "components/gather/addMilitarySavings/AvailableSavingItemDetail";
import AddMilitarySavingsTerm from "components/gather/addMilitarySavings/AddMilitarySavingsTerm";
import AddMilitarySavingsForm from "components/gather/addMilitarySavings/AddMilitarySavingsForm";
import AddMilitarySavingSuccess from "components/gather/addMilitarySavings/AddMilitarySavingSucess";
import SafeBox from "components/gather/safebox/SafeBox";
import Goal from "components/gather/addGoal/Goal";
import Complete from "components/gather/addGoal/Complete";
import MobileKeypad from "components/gather/addGoal/MobileKeypad";
import CompHowTo from "components/compete/CompHowTo";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/gather" element={<Gather />} />
      <Route
        path="/gather/add-militarySaving"
        element={<AddMilitarySavings />}
      />
      <Route
        path="/gather/add-militarySaving/:bankname"
        element={<AvailableSavingItemDetail />}
      />
      <Route
        path="/gather/add-militarySaving/:bankname/term"
        element={<AddMilitarySavingsTerm />}
      />
      <Route
        path="/gather/add-militarySaving/:bankname/term/form"
        element={<AddMilitarySavingsForm />}
      />
      <Route
        path="/gather/add-militarySaving/:bankname/term/form/success"
        element={<AddMilitarySavingSuccess />}
      />
      <Route path="/gather/add-goal" element={<Goal />} />
      <Route path="/gather/add-goal/complete" element={<Complete />} />
      <Route path="/gather/add-safebox" element={<SafeBox />} />
      <Route path="/gather/add-safebox/complete" element={<Complete />} />
      <Route path="/save" element={<Save />} />
      <Route path="/compete" element={<Compete />} />
      <Route path="/compete/howto" element={<CompHowTo />} />
      <Route path="/compete/:id" element={<CompeteDetail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/keypad" element={<MobileKeypad />} />
    </Routes>
  );
}

export default AllRoutes;
