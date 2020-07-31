import React from "react";
import TVPresenter form "./TVPresenter";

export default class extends React.Component{
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        error: null,
        loading: ture
    };

    render(){
        const {topRated, popular, airingToday, error, loading} = this.state;
        return <TVPresenter
            topRated={topRated}
            popular={popular}
            airingToday={airingToday}
            error={error}
            loading={loading}
        />;
    }
}