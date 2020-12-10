import React from 'react';

import { DataServiceConsumer } from "../data-service-context";


const withDataStoreService = () => (Wraped) => {

    return (props) => {

        return (
            <DataServiceConsumer>
                {
                    (dataStoreService) => {
                        return (
                            <Wraped {...props} dataStoreService={dataStoreService} />
                        )
                    }
                }
            </DataServiceConsumer>
        )

    }

}

export default withDataStoreService;