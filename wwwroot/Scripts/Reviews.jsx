class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    componentDidMount() {
        $.ajax({
            url: RestaurantReviewsURL,
            type: "GET",
            dataType: "json",
            success: function (returnData) {
                if (returnData != null) {
                    this.setState({data: returnData});
                }
            }.bind(this),
            error: function (jqRequest, status, e) {
                console.log(status);
                console.log(jqRequest);
                console.log(e);
            }
        });
    }
    render() {
        function makeRestaurantReviewList(x, index) {
            return <RestaurantReview data={x} key={index} />;
        }
        return (
            <div>
                <h1>Restaurant Reviews</h1>
                {this.state.data.map(makeRestaurantReviewList)}
            </div>    
        );
    }
}