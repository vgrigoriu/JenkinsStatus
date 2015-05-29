var Job = React.createClass({
    render: function () {
        var classes = "job panel panel-default";
        if (this.props.job.result === 'SUCCESS') {
            classes += ' panel-success';
        } else if (this.props.job.result === 'FAILURE') {
            classes += ' panel-danger';
        }

        var headingStyle = { fontSize: 24 };

        return (
            <div className='col-md-3'>
                <div className={classes}>
                    <div className='panel-heading' style={headingStyle}>
                        {this.props.job.title}
                    </div>
                    <div className='panel-body'>
                        {this.props.job.result}
                    </div>
                </div>
            </div>
        );
    }
});

var JobList = React.createClass({
    render: function () {
        var jobNodes = this.props.jobs.map(function (job) {
            return (
                <Job job={job} key={job.title} />
            );
        });

        return (
            <div className='job-list container'>
                <div className='row'>
                    {jobNodes}
                </div>
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
