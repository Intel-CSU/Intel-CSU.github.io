(function() {
	var Realmac = Realmac || {};

	Realmac.meta = {
		
		// Set the browser title
		//
		// @var String text
		setTitle: function(text) {
			return document.title = text;
		},
		
		// Set the content attribute of a meta tag
		//
		// @var String name
		// @var String content
		setTagContent: function(tag, content){
			// If the tag being set is title
			// return the result of setTitle
			if ( tag === 'title' )
			{
				return this.setTitle(content);
			}
			
			// Otherwise try and find the meta tag
			var tag = this.getTag(tag);
			
			// If we have a tag, set the content
			if ( tag !== false )
			{
				return tag.setAttribute('content', content);
			}
			
			return false;
		},
		
		// Find a meta tag
		//
		// @var String name
		getTag: function(name) {
			var meta = document.querySelectorAll('meta');
			
			for ( var i=0; i<meta.length; i++ )
			{
				if (meta[i].name == name){
					return meta[i];
				}
			}
			
			var tag = document.createElement('meta');
			tag.name = name;
			document.getElementsByTagName('head')[0].appendChild(tag);
			
			return tag;
		}
	};
 
	// Object containing all website meta info
	var websiteMeta = {"archive-april-2023.html":"Archives for April 2023","MSN.html":"￼\nCSU recently joined Midwest Semiconductor Network, a network from a group of leading research institutions from Ohio, Michigan, Illinois, and Indian","Intel_Kickoff_event_Sep23_2022.html":"Intel kickoff event at CSCC, Sep. 23, 2022:\nL2R: Fathi Amsaad (WSU), Gabriela Cruz Thompson (Intel), Subhashini Ganapathy (WSU), Steven Bibyk (OSU), S","Mubbashar_Khan.html":"￼\nDr. Khan has joined the CSU Intel team as a Research Assistant Professor of Electronic Engineering Technology. They were hired through the Intel gra","Intel_visit_Sep22_2022.html":"Melinda Murdock (University Relations Manager, Intel Corp.) and Pia Wilson-Body (President of Intel Foundation) visited the CSU campus on September 20","CSU_PR_Sep9_2022.html":"￼\n\nContact: Debbie Alberico, Public Relations Director\ndalberico@centralstate.edu\n937-376-6605\n \nImmediate Release\n \nSeptember 9, 2022\n \nCentral State","Intel_visit_Sep8_2022.html":"Gabriela Cruz Thompson, the Director of University Research Collaboration in Intel Labs, Intel Corp, visited the CSU campus on September 8, 2022.\n￼","Intel_Ohio_visit_April2023.html":"￼\nOn Monday, April 3, 2023, the Intel Ohio team visited the campus of CSU to share their expertise and explore potential partnerships. The day was fil","Assistant_Professor_Electronic_Engineering.html":"Research Assistant Professor of Electronic Engineering Technology\nApplication deadline: 11\/30\/2022\nDetails and Applications: https:\/\/careers.centralst","Intel_summer_internship_2023_kickoff.html":"￼\nJune 5, 2023 — The CSU-Led Intel Summer Internship program for Women and Underrepresented Minorities is officially underway at Wright State Universi","archive-september-2022.html":"Archives for September 2022","archive-january-2023.html":"Archives for January 2023","Powerex_visit_Jan_2023.html":"On Tuesday, January 31, the Powerex team, consisting of Dr. Scott Leslie (Chief Technologist), Garold Mobley (Project Manager – CHIPs ACT), Jeremy J. ","WSU_cleanroom_visit_Sep29_2022.html":"WSU cleanroom labs visit on Sep. 29, 2022.\n￼","archive-june-2023.html":"Archives for June 2023","archive-october-2022.html":"Archives for October 2022","WYSO_Sep26_2022.html":"￼\n\nWYSO: CSU Semiconductor Program: Central State University will partner with 5 other colleges and universities, and Intel, to create a new semicondu","Intel_summer_internship_2023.html":"￼\nAre you seeking an exceptional opportunity to jump-start your career at Intel?\nCentral State University, in partnership with Intel and Wright State "};
 
	// pageId must match the key in websiteMeta object
	var url = window.location.pathname;
	var pageId = url.substring(url.lastIndexOf('/')+1);
	if (!pageId || pageId.length == 0){
		pageId = 'index.html';
	}
	pageMeta = websiteMeta[pageId];
 
	// If we have meta for this page
	if (pageMeta){
		Realmac.meta.setTagContent('description', pageMeta);
	}
 
 })();