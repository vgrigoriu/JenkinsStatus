var Job = React.createClass({
    render: function () {
        return (
            <div class='job'>
                {this.props.job.title} is a {this.props.job.result}
            </div>
        );
    }
});

var JobList = React.createClass({
    render: function () {
        var jobNodes = this.props.jobs.map(function (job) {
            return (
                <Job job={job} />
            );
        });

        return (
            <div class="job-list">
                {jobNodes}
            </div>
        );
    }
});

var jobs = [
    {
        title: 'EmerGIS',
        result: 'SUCCESS',
        building: false
    },
    {
        title: 'WKRAFT',
        result: 'FAILURE',
        building: false
    },
    {
        title: 'Some Job',
        result: 'SUCCESS',
        building: true
    },

];

React.render(
    <JobList jobs={jobs} />,
    document.getElementById('main')
);
