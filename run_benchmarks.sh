#!/bin/sh

###################################
#  user defined, please change:)  #
###################################
# project names and it's location
# PROJECTNAME=mytest_suppress # we build a ${PROJECTNAME}.py as final plant for controller synthesis
# BENCHMARKLOCATION=benchmarks/mytests # this directory should inclide only two files: (1) a extended plant, (2) a hyperautomaton
#
# # sepecify file names
# ENTENDEDPLANT=mytest_suppress_extended.js
# HYPERAUTOMATON=hyperauto_test.txt


### Benchmarks: please uncomment to run a specific ase

# PROJECTNAME=string
# BENCHMARKLOCATION=benchmarks/string
# ENTENDEDPLANT=string_extended.js
# HYPERAUTOMATON=hyperauto_string.txt

# PROJECTNAME=implicit1
# BENCHMARKLOCATION=benchmarks/implicit1
# ENTENDEDPLANT=implicit1_extended.js
# HYPERAUTOMATON=hyperauto_implicit1.txt


# PROJECTNAME=implicit2
# BENCHMARKLOCATION=benchmarks/implicit2
# ENTENDEDPLANT=implicit2_extended.js
# HYPERAUTOMATON=hyperauto_implicit2.txt

# PROJECTNAME=gps_dinf
# BENCHMARKLOCATION=benchmarks/gps_dinf
# ENTENDEDPLANT=gps_dinf_extended.js
# HYPERAUTOMATON=hyperauto_gps_dinf.txt

# PROJECTNAME=gps_dni
# BENCHMARKLOCATION=benchmarks/gps_dni
# ENTENDEDPLANT=gps_dni_extended.js
# HYPERAUTOMATON=hyperauto_gps_dni.txt

# PROJECTNAME=login_ni
# BENCHMARKLOCATION=benchmarks/login_ni
# ENTENDEDPLANT=login_ni_extended.js
# HYPERAUTOMATON=hyperauto_login_ni.txt

# PROJECTNAME=login_ninf
# BENCHMARKLOCATION=benchmarks/login_ninf
# ENTENDEDPLANT=login_ninf_extended.js
# HYPERAUTOMATON=hyperauto_login_ninf.txt

# PROJECTNAME=md5
# BENCHMARKLOCATION=benchmarks/md5
# ENTENDEDPLANT=md5_extended.js
# HYPERAUTOMATON=hyperauto_md5.txt


# PROJECTNAME=printer
# BENCHMARKLOCATION=benchmarks/printer
# ENTENDEDPLANT=printer_extended.js
# HYPERAUTOMATON=hyperauto_printer.txt

# PROJECTNAME=resize
# BENCHMARKLOCATION=benchmarks/resize
# ENTENDEDPLANT=resize_extended.js
# HYPERAUTOMATON=hyperauto_resize.txt


# PROJECTNAME=kerp_req
# BENCHMARKLOCATION=benchmarks/kerp_req
# ENTENDEDPLANT=kerp_request_extended.js
# HYPERAUTOMATON=hyperauto_kerp_request.txt

# PROJECTNAME=m-log
# BENCHMARKLOCATION=benchmarks/m-log
# ENTENDEDPLANT=log_extended.js
# HYPERAUTOMATON=hyperauto_log.txt

# PROJECTNAME=deniability
# BENCHMARKLOCATION=benchmarks/deniability
# ENTENDEDPLANT=wallet_extended.js
# HYPERAUTOMATON=hyperauto_deniability.txt

# PROJECTNAME=toml
# BENCHMARKLOCATION=benchmarks/toml
# ENTENDEDPLANT=nconf_toml_extended.js
# HYPERAUTOMATON=hyperauto_toml.txt

# PROJECTNAME=toml2
# BENCHMARKLOCATION=benchmarks/toml2
# ENTENDEDPLANT=nconf_toml2_extended.js
# HYPERAUTOMATON=hyperauto_toml.txt

# PROJECTNAME=socleak
# BENCHMARKLOCATION=benchmarks/socleak
# ENTENDEDPLANT=socleak_extended.js
# HYPERAUTOMATON=hyperauto_socleak.txt

# PROJECTNAME=socleak2
# BENCHMARKLOCATION=benchmarks/socleak2
# ENTENDEDPLANT=socleak2_extended.js
# HYPERAUTOMATON=hyperauto_socleak2.txt


# PROJECTNAME=buffer_vuln
# BENCHMARKLOCATION=benchmarks/buffer_vuln
# ENTENDEDPLANT=buffer_extended.js
# HYPERAUTOMATON=hyperauto_buffer_vuln.txt

###################################################
#   tool parameters, please don't change below    #
###################################################
# tools #
EXPOSE=1_buildModel/ExpoSE
EXTRACTOR=1_buildModel/modelbuilder.py
# SYNTHSISTOOL=2_synth_explicit #up-to-date version
SYNTHSISTOOL=2_synth_symbolic #up-to-date version

# JS programs #
JSPROGRAM=${BENCHMARKLOCATION}/${ENTENDEDPLANT}
HYPERAUTOFILE=${BENCHMARKLOCATION}/${HYPERAUTOMATON}
### read/write file names ###
OUTFOLDER=${BENCHMARKLOCATION}/hyperenforce_out
mkdir -p ${OUTFOLDER}
EXPOSEOUT=${OUTFOLDER}/output.txt
TRACESFILE=${OUTFOLDER}/traces.txt
MODELFILE=${OUTFOLDER}/model.txt
STATSFILE=${OUTFOLDER}/stats.txt
FINLAPLANT=${OUTFOLDER}/${PROJECTNAME}.py

############
#   MAIN   #
############
echo "======================================================="
echo " HyperEnforce! Runtime enforcement of hyperproperties "
echo "======================================================="
echo "- project name:       ${PROJECTNAME}"
echo "- benchmark location: ${BENCHMARKLOCATION}"
echo "- extended plant:     ${BENCHMARKLOCATION}/${ENTENDEDPLANT}"
echo "- hyperautomaton:     ${BENCHMARKLOCATION}/${HYPERAUTOMATON}"

echo "\n (hyperenforce starts.)"

echo "\n\`\` step 1: build formal model. \`\`"
echo "call expoSE to obtain information of a JS program..."
EXPOSE_PRINT_PATHS=1 EXPOSE_LOG_LEVEL=3 EXPOSE_MAX_CONCURRENT=1 ${EXPOSE} ${JSPROGRAM} > ${EXPOSEOUT}
echo "\n\`\` success! \`\`"

echo "\n\`\` use modelBuilder.py to obtain a well-formatted collection of traces and build model...\`\`"
python3 ${EXTRACTOR} ${JSPROGRAM} ${EXPOSEOUT} ${TRACESFILE} ${MODELFILE} ${HYPERAUTOFILE} ${STATSFILE} ${FINLAPLANT};
echo "\n\`\` success! \`\` "

echo "\n\`\` step 2: synthesis controller \`\`"
echo "\n\`\` call synthesis tool, using either symbolic or explicit automaton \`\`"


time(
mkdir -p ${SYNTHSISTOOL}/temp_container;
cp ${OUTFOLDER}/*.py ${SYNTHSISTOOL}/temp_container;
cd ${SYNTHSISTOOL};
poetry run python temp_container/${PROJECTNAME}.py;
)

echo "\n\`\` success! synthesis finished. \`\`"

echo "\n (hyperenforce ended.)"

# #
echo "\n(extra step:) save this file if it's a new run."
mkdir -p ${SYNTHSISTOOL}/previous_runs
mv ${SYNTHSISTOOL}/temp_container/*.py ${SYNTHSISTOOL}/previous_runs/
# rm ${SYNTHSISTOOL}/temp_container/*.py
