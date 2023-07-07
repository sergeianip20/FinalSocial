import React from "react";
import { MemoryRouter } from "react-router";

export const decoratorsRouter =(Story:any) => {
    return   <MemoryRouter initialEntries={['/']}>
            {Story()}
        </MemoryRouter>
    }
