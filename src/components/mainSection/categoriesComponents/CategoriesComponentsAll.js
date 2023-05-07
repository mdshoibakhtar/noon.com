import React from 'react';
import { Categories } from '../../../pages/categories/index';
import { pDataCate } from '../../../pages/categories/pMockCategoriesData';


function CategoriesComponentsAll() {
    return (
        <>
            <Categories pDataCate={pDataCate} />
        </>
    );
}

export default CategoriesComponentsAll;