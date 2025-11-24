# This is pre-build script that cleans up resources and compiles for selected pages, then finally you may combine those subdirectories into one via nginx.
# double check you are using LF instead of CRLF

# please run this script in project root directory

export KEEP_PAGES="Math3200"

# check if environment variable is set
if [ -z "$KEEP_PAGES" ]; then
    echo "Please set environment variable KEEP_PAGES to the pages you want to keep for microsite building."
    exit 1
fi

echo "Currently compiling pages: ${KEEP_PAGES}"

# Rewrite base _meta.js and next.config.js for export pages
echo "Rewrite base _meta.js and keeping ${KEEP_PAGES}"

cp "./distribute/${KEEP_PAGES}/_meta.js" "./content/_meta.js"

# remove other subdirectories
for dir in ./content/*/; do
    # strip the leading path and trailing slash
    base_dir="$(basename "${dir%/}")"

    # check if base_dir is in KEEP_PAGES (space-separated list)
    case " $KEEP_PAGES " in
        *" $base_dir "*) 
            echo "Keeping content dir: $dir"
            ;;
        *)
            echo "Removing content dir: $dir"
            rm -rf -- "$dir"
            ;;
    esac
done

# remove public directory
for dir in ./public/*/; do
    base_dir="$(basename "${dir%/}")"

    case " $KEEP_PAGES " in
        *" $base_dir "*) 
            echo "Keeping public dir: $dir"
            ;;
        *)
            echo "Removing public dir: $dir"
            rm -rf -- "$dir"
            ;;
    esac
done

echo "Done clearing up resources and compiling for ${KEEP_PAGES}"

echo "modify next.config.js"

cp "./distribute/next.config.mjs" "./next.config.mjs"


