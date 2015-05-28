var JobList = React.createClass({
    render: function () {
        return (
            <div class="job-list">
                <div>Job 1</div>
                <div>Job 2</div>
            </div>
        );
    }
});

React.render(
    <JobList />,
    document.getElementById('main')
);
