import * as report from "cucumber-html-reporter";
import { Options } from "cucumber-html-reporter";
import path from 'path';
export class CucumberReportExtension{
    private static projectDir=process.cwd();
    private static src:string =path.join(CucumberReportExtension.projectDir,'src');
    private static reporting:string = path.join(CucumberReportExtension.src,'reporting');
    private static jsonDir:string= path.join(CucumberReportExtension.reporting,'json');
    private static htmlDir:string =path.join(CucumberReportExtension.reporting,'html');
    private static jsonFile:string= path.join(CucumberReportExtension.jsonDir,'cucumber_report.json');

    public static cucumberReportOptions:Options ={
        theme:'bootstrap',
        jsonFile:CucumberReportExtension.jsonFile,
        output:path.join(CucumberReportExtension.htmlDir,'cucumber_reporter.html'),
        reportSuiteAsScenarios:true,
        launchReport:false,
        metadata:{
            "App Version": "0.0.1",
            "Test Environment":"Testing",
            "Browser":"chrome",
            "Platform":"Windows 10",
            "Parallel":"Scenarios",
            "Executed":"Local"
        }
    };

    public static GenerateCucumberReport(){
        report.generate(this.cucumberReportOptions);
    }
}
