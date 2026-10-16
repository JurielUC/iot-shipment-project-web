const adminDashboardResponse = {
    "status": "Success",
    "data": {
        "stats": [
            {
                "title": "Total Users",
                "value": 1,
                "key": "students_count",
                "icon": "Users"
            },
            {
                "title": "Faculty Members",
                "value": 2,
                "key": "faculties_count",
                "icon": "UserRoundCog"
            },
            {
                "title": "Active Sections",
                "value": 0,
                "key": "sections_count",
                "icon": "GraduationCap"
            },
            {
                "title": "Subjects",
                "value": 0,
                "key": "subjects_count",
                "icon": "BookOpen"
            }
        ],
        "recent_activities": [
            {
                "title": null,
                "description": null,
                "time": "2 months"
            }
        ]
    }
}

export default adminDashboardResponse;