import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("NavBar component", () => {
    const renderNavbar = () => {
        render(<NavBar />, { wrapper: MemoryRouter });

    };
    test("renders both links", () => {
        // render the navbar
        renderNavbar();
        //expect the links ti be there or something
        expect(screen.getByText("Posts List")).toBeInTheDocument();
        expect(screen.getByText("Create New Post")).toBeInTheDocument();
    });
});