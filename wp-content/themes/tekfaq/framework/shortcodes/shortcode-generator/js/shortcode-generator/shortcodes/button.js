wooShortcodeMeta={
	attributes:[
			{
				label:"Type",
				id:"type",
				controlType:"select-control", 
				selectLabelValues:[{'Primary':'primary'},{'Default':'default'},{'Info':'info'},{'Success':'success'}, {'Danger':'danger'},{'Warning':'warning'}, {'Inverse':'inverse'}],
			//	help:"The button title.",
				defaultValue: 'primary', 
				defaultText: 'Primary'
			},
			{
				label:"Size",
				id:"size",
				controlType:"select-control", 
				selectLabelValues:[{'Small':'small'}, {'Medium':'medium'}, {'Large':'large'}],
				defaultValue: 'medium', 
				defaultText: 'Medium'
			},
			{
				label:"Url",
				id:"url",
				help:"Link (e.g. http://google.com).",
				isRequired:true,
				validateLink:true
			},
			
			{
				label:"Button Text",
				id:"text",
				isRequired:true
			},
			{
				label:"Icon",
				id:"icon",
				controlType:"select-control",
				selectLabelValues:[{'None':'none'},
								   {'Bar chart':'bar-chart'},
				                   {'Beaker':'beaker'},
				                   {'Book':'book'},
				                   {'Briefcase':'briefcase'},
				                   {'Camera-retro':'camera-retro'},
				                   {'Camera':'camera'},
				                   {'Check':'check'},
				                   {'Cog':'cog'},
				                   {'Delicious':'delicious'},
				                   {'Desktop':'desktop'},				                   
				                   {'Download':'download'},
				                   {'Edit':'edit'},
				                   {'Envelope':'envelope'},
				                   {'Eye open':'eye-open'},
				                   {'Facebook':'facebook'},
				                   {'Fighter jet':'fighter-jet'},
				                   {'File':'file'},
				                   {'Film':'film'},
				                   {'Flickr':'flickr'},
				                   {'Folder open':'folder-open'},
				                   {'Folder close':'folder-close'},
				                   {'Github':'github'},
				                   {'Google plus':'google-plus'},
				                   {'Hand down':'hand-dwon'},
				                   {'Hand up':'hand-up'},
				                   {'Heart-empty':'heart-empty'},
				                   {'Home':'home'},
				                   {'Key':'key'},
				                   {'Laptop':'laptop'},
				                   {'Link':'link'},
				                   {'Linkedin':'linkedin'},
				                   {'Leaf':'leaf'},
				                   {'Magic':'magic'},
				                   {'Medkit':'medkit'},
				                   {'Mobile phone':'mobile-phone'},
				                   {'Music':'music'},
				                   {'Ok':'ok'},
				                   {'Pencil':'pencil'},
				                   {'Phone':'phone'},
				                   {'Picture':'picture'},
				                   {'Pinterest':'pinterest'},
				                   {'Play circel':'play-circel'},
				                   {'Plus':'plus'},
				                   {'Plus sign':'plus-sign'},
				                   {'Print':'print'},
				                   {'Search':'search'},
				                   {'Shopping cart':'shopping-cart'},
				                   {'Sitemap':'sitemap'},
				                   {'Star empty':'star-empty'},
				                   {'Truck':'truck'},
				                   {'Twitter':'twitter'},
				                   {'User':'user'},
				                   {'Wrench':'wrench'},
				                   {'Youtube':'youtube'},
				                   ]
			},
			{
				label:"Color",
				id:"iconcolor",
				controlType:"select-control",
				selectLabelValues:[{'White':'white'}, {'Dark':'#222'}]
			},
			{
				label:"Target",
				id:"target",
				controlType:"select-control",
				selectLabelValues:[{'Self':'_self'}, {'Blank':'_blank'}]
			},
			],
	shortcode:"button"
};