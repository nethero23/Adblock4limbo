/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock

*/

/* jshint esversion:11 */
/* global cloneInto */

'use strict';

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_noFetchIf = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["ads"],["/^/"],["player-feedback"],["adsbygoogle"],["openx"],["method:HEAD"],["googlesyndication"],["googlesyndication","method:HEAD"],["damoh.ani-stream.com"],["/google|\\/ad.+\\.js/"],["/googlesyndication|adpushup|adrecover/"],["/googlesyndication|inklinkor|ads\\/load/"],["zomap.de"],["adsafeprotected"],["google"],["cloudfront"],["/outbrain|criteo|thisiswaldo|media\\.net|ohbayersbur/"],["googletagmanager"],["/adtrue\\.com|eningspon\\.com|freychang\\.fun|orquideassp\\.com|popunder/"],["popunder"],["adsbygoogle.js"],["manager"],["moonicorn.network"],["ad"],["/ads"],["tvid.in/log"],["cloudfront.net/?"],["xhr0"],["analytics"],["wtg-ads"],["doubleclick"],["cloud"],["/ads|doubleclick/"],["dqst.pl"],["googlesyndication.com"],["wpadmngr"],["vlitag"],["imasdk"],["adoto"],["tpc.googlesyndication.com"],["syndication"],["/freychang|passback|popunder|tag/"],["google-analytics"],["ima"],["/googlesyndication|inklinkor/"],["/adoto|googlesyndication/"],["ad-delivery"],["/adoto|\\/ads\\/js/"],["imasdk.googleapis.com"],["fwmrm.net"],["/ads|googletagmanager/"],["body:browser"],["body:/[\\w\\W]{700}/"],["method:/post|posT|poSt|poST|pOst|pOsT|pOSt|pOST|Post|PosT|PoSt|PoST|POst|POsT|POSt|POST/"],["marmalade"],["url:ipapi.co"],["api"],["method:GET"]];

const hostnamesMap = new Map([["allmusic.com",0],["investing.com",0],["mylivewallpapers.com",0],["softfully.com",0],["sekilastekno.com",0],["key-hub.eu",0],["discoveryplus.in",0],["news-world24.com",0],["calculator-online.net",0],["tutorial.siberuang.com",0],["desiflixindia.com",0],["insurance.iptvsetupguide.com",0],["dotabuff.com",0],["forum.cstalking.tv",0],["mcqmall.com",0],["nguontv.org",0],["apksafe.in",0],["witcherhour.com",0],["clamor.pl",0],["one-tech.xyz",0],["ozulscans.com",0],["i-polls.com",0],["insurancevela.com",0],["noor-book.com",0],["wrzesnia.info.pl",0],["elahmad.com",0],["compromath.com",0],["sumoweb.to",0],["haloursynow.pl",0],["satkurier.pl",0],["apkupload.in",0],["ezeviral.com",0],["pngreal.com",0],["ytpng.net",0],["mtg-print.com",0],["bhojpuritop.in",0],["naukrilelo.in",0],["gktech.uk",0],["heavy.com",0],["creators.nafezly.com",0],["downloadfilm.website",0],["skidrowreloaded.com",1],["pinoyfaucet.com",1],["player.glomex.com",2],["audioztools.com",3],["leechpremium.link",3],["camcam.cc",3],["png.is",3],["nohat.cc",3],["kpopsea.com",3],["isi7.net",3],["hyipstats.net",3],["palixi.net",3],["howdy.id",3],["fastssh.com",3],["sshkit.com",3],["freecoursesonline.me",3],["pinloker.com",3],["fc-lc.xyz",3],["htmlgames.com",4],["mac2sell.net",5],["1001tracklists.com",5],["gamebrew.org",5],["game3rb.com",5],["sixsave.com",5],["bowfile.com",[5,26]],["dealsfinders.blog",5],["iphonechecker.herokuapp.com",5],["coloringpage.eu",5],["conocimientoshackers.com",5],["juegosdetiempolibre.org",5],["karaokegratis.com.ar",5],["mammaebambini.it",5],["riazor.org",5],["rinconpsicologia.com",5],["sempredirebanzai.it",5],["vectogravic.com",5],["androidacy.com",5],["freetohell.com",5],["faucetcrypto.com",6],["mynewsmedia.co",6],["revadvert.com",6],["toolss.net",6],["arcai.com",6],["romadd.com",6],["disheye.com",6],["homeairquality.org",[6,17]],["techtrim.tech",6],["arhplyrics.in",6],["raky.in",6],["askpaccosi.com",6],["crypto4tun.com",6],["jpoplist.us",6],["quizack.com",6],["moddingzone.in",6],["rajsayt.xyz",6],["jaunpurmusic.info",6],["apkandroidhub.in",6],["babymodz.com",6],["deezloaded.com",6],["mad.gplpalace.one",6],["studyis.xyz",6],["chillx.top",6],["worldappsstore.xyz",6],["prepostseo.com",6],["dulichkhanhhoa.net",6],["noithatmyphu.vn",6],["bitefaucet.com",6],["iptvjournal.com",6],["dramaworldhd.co",6],["tudaydeals.com",6],["choiceappstore.xyz",6],["inbbotlist.com",6],["freepreset.net",6],["cryptoblog24.info",6],["amritadrino.com",6],["wikitraveltips.com",6],["getintoway.com",6],["crdroid.net",6],["zerion.cc",6],["beelink.pro",6],["hax.co.id",6],["woiden.id",6],["pviewer.site",6],["theusaposts.com",6],["hackr.io",6],["esopress.com",6],["welovecrypto.xyz",6],["paketmu.com",6],["coins-town.com",6],["watchx.top",6],["bankvacency.com",6],["technicalatg.com",6],["bitcosite.com",6],["bitzite.com",6],["mixrootmods.com",6],["globlenews.in",6],["programmingeeksclub.com",6],["now.gg",6],["now.us",6],["moto.it",6],["wellness4live.com",6],["rekidai-info.github.io",6],["forplayx.ink",6],["automoto.it",6],["olarila.com",6],["animeszone.net",6],["mydomainscan.com",6],["tplrunapk.com",6],["abhayaby.com",6],["tinsukiacollege.org",6],["filmy4wab.pro",6],["pmsarkarijob.com",6],["jomeramankahe.in",6],["rontymobile.in",6],["feedar.net",6],["tophostingapp.com",6],["webhostingpost.com",6],["snapwordz.com",6],["toolxox.com",6],["go2share.net",6],["flixscans.com",6],["los40.com",6],["muyinteresante.es",7],["ani-stream.com",8],["duplichecker.com",[9,10]],["plagiarismchecker.co",10],["plagiarismdetector.net",10],["searchenginereports.net",10],["smallseotools.com",10],["oko.sh",11],["joyn.de",12],["tf1.fr",13],["exe.app",14],["eio.io",14],["ufacw.com",14],["figurehunter.net",14],["workink.click",15],["work.ink",16],["dev.miuiflash.com",18],["djxmaza.in",18],["thecubexguide.com",18],["camarchive.tv",19],["hindustantimes.com",20],["linkpoi.me",21],["platform.adex.network",22],["mcrypto.club",23],["coinsparty.com",23],["weszlo.com",23],["simplebits.io",24],["timesnowhindi.com",25],["timesnowmarathi.com",25],["timesofindia.com",25],["tinyurl.is",27],["wyze.com",28],["mmorpg.org.pl",29],["journaldemontreal.com",30],["tvanouvelles.ca",30],["boxingstreams100.com",30],["mlbstreams100.com",30],["mmastreams-100.tv",30],["nbastreams-100.tv",30],["soccerstreams-100.tv",30],["vods.tv",30],["atresplayer.com",30],["independent.co.uk",30],["speedrun.com",31],["dongknows.com",32],["forsal.pl",33],["2the.space",34],["allcryptoz.net",35],["crewbase.net",35],["crewus.net",35],["shinbhu.net",35],["shinchu.net",35],["thumb8.net",35],["thumb9.net",35],["topcryptoz.net",35],["uniqueten.net",35],["ultraten.net",35],["mdn.lol",35],["freeshib.biz",36],["deutschekanale.com",37],["multifaucet.club",38],["soranews24.com",39],["computerpedia.in",40],["foodxor.com",40],["mealcold.com",40],["smartkhabrinews.com",41],["freepik-downloader.com",42],["freepic-downloader.com",42],["ortograf.pl",43],["tii.la",44],["mixrootmod.com",45],["explorecams.com",46],["btcbitco.in",47],["btcsatoshi.net",47],["cempakajaya.com",47],["crypto4yu.com",47],["gainl.ink",47],["readbitcoin.org",47],["wiour.com",47],["riuria.beauty",48],["france.tv",49],["getthit.com",50],["search.brave.com",51],["blog.skk.moe",52],["skk.moe",53],["pimylifeup.com",54],["seazon.fr",55],["html5.gamedistribution.com",56],["lifestyle.bg",57],["money.bg",57],["news.bg",57],["topsport.bg",57],["webcafe.bg",57]]);

const entitiesMap = new Map([["pobre",0],["zone-telechargement",1],["magesy",3],["dropgalaxy",18]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function noFetchIf(
    arg1 = '',
) {
    if ( typeof arg1 !== 'string' ) { return; }
    const safe = safeSelf();
    const needles = [];
    for ( const condition of arg1.split(/\s+/) ) {
        if ( condition === '' ) { continue; }
        const pos = condition.indexOf(':');
        let key, value;
        if ( pos !== -1 ) {
            key = condition.slice(0, pos);
            value = condition.slice(pos + 1);
        } else {
            key = 'url';
            value = condition;
        }
        needles.push({ key, re: safe.patternToRegex(value) });
    }
    const log = needles.length === 0 ? console.log.bind(console) : undefined;
    self.fetch = new Proxy(self.fetch, {
        apply: function(target, thisArg, args) {
            let proceed = true;
            try {
                let details;
                if ( args[0] instanceof self.Request ) {
                    details = args[0];
                } else {
                    details = Object.assign({ url: args[0] }, args[1]);
                }
                const props = new Map();
                for ( const prop in details ) {
                    let v = details[prop];
                    if ( typeof v !== 'string' ) {
                        try { v = JSON.stringify(v); }
                        catch(ex) { }
                    }
                    if ( typeof v !== 'string' ) { continue; }
                    props.set(prop, v);
                }
                if ( log !== undefined ) {
                    const out = Array.from(props)
                                     .map(a => `${a[0]}:${a[1]}`)
                                     .join(' ');
                    log(`uBO: fetch(${out})`);
                }
                proceed = needles.length === 0;
                for ( const { key, re } of needles ) {
                    if (
                        props.has(key) === false ||
                        re.test(props.get(key)) === false
                    ) {
                        proceed = true;
                        break;
                    }
                }
            } catch(ex) {
            }
            return proceed
                ? Reflect.apply(target, thisArg, args)
                : Promise.resolve(new Response());
        }
    });
}

function safeSelf() {
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
    }
    const self = globalThis;
    const safe = {
        'Error': self.Error,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'jsonParse': self.JSON.parse.bind(self.JSON),
        'jsonStringify': self.JSON.stringify.bind(self.JSON),
        'log': console.log.bind(console),
        uboLog(...args) {
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate !== true || pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    pattern,
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            return {
                pattern,
                re: new this.RegExp(pattern.replace(
                    /[.*+?^${}()|[\]\\]/g, '\\$&'),
                    options.flags
                ),
                expect,
            };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            return this.RegExp_test.call(details.re, haystack) === details.expect;
        },
        patternToRegex(pattern, flags = undefined) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
            }
            try {
                return new RegExp(match[1], match[2] || flags);
            }
            catch(ex) {
            }
            return /^/;
        },
        getExtraArgs(args, offset = 0) {
            const entries = args.slice(offset).reduce((out, v, i, a) => {
                if ( (i & 1) === 0 ) {
                    const rawValue = a[i+1];
                    const value = /^\d+$/.test(rawValue)
                        ? parseInt(rawValue, 10)
                        : rawValue;
                    out.push([ a[i], value ]);
                }
                return out;
            }, []);
            return Object.fromEntries(entries);
        },
    };
    scriptletGlobals.set('safeSelf', safe);
    return safe;
}

/******************************************************************************/

const hnParts = [];
try { hnParts.push(...document.location.hostname.split('.')); }
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { noFetchIf(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
    return uBOL_noFetchIf();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_noFetchIf = cloneInto([
            [ '(', uBOL_noFetchIf.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_noFetchIf);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_noFetchIf;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
