import React from 'react';
import { sheetButtonData } from '@/app/_utils/sheet_button_data';

function ListButton() {
    return (
        <div className=''>
            
            { sheetButtonData.map((value, key) => 
            {
                return (
                    <ul>
                        <li key={key}><a href='/mypage'>{value.name}</a></li>
                    </ul>
                )
            }) }

        </div>
    )
}

export default ListButton
